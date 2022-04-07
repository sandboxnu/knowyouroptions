import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AuthenticatedUser,
  SignInInfo,
  UserAuthPayload,
  UserInfo,
} from 'src/types/user';
import { UserService } from 'src/user/user.service';
import { User } from '../entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly maxAge: number;
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    this.maxAge = this.configService.get<number>('JWT_EXPIRATION');
  }

  /**
   *
   * @param info
   */
  public async signIn(info: SignInInfo): Promise<AuthenticatedUser> {
    const user = await this.usersService.getUser(info);

    // Create temporary auth token, so we can route them to /login/
    const token = await this.createAuthToken({ userId: user.id }, 60);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      accessToken: token,
    };
  }

  public async signUp(userInfo: UserInfo): Promise<AuthenticatedUser> {
    this.verifyPasswordStrength(userInfo.password);

    const user = await this.usersService.createUser(userInfo);

    // Create temporary auth token, so we can route them to /login/
    const token = await this.createAuthToken({ userId: user.id }, 60);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      accessToken: token,
    };
  }

  /**
   * Creates an auth token based on the given payload
   * If no expiry time is given, tokens expire after the maxAge property in this service
   * Otherwise, tokens expire after the specified number of seconds
   * @param payload payload being turned into auth token
   * @param expiresIn expiry time in seconds
   */
  public async createAuthToken(payload: UserAuthPayload, expiresIn?: number) {
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: expiresIn ? expiresIn : this.maxAge,
    });

    if (token === null || token === undefined) {
      throw new HttpException('Invalid JWT Token', 500);
    }

    return token;
  }

  /**
   * Returns the payload decoded from the given auth token.
   * Does not verify signature (not secure)
   *
   * @param authToken User Authorization Token
   */
  public decodeToken(authToken: string): UserAuthPayload {
    return this.jwtService.decode(authToken) as UserAuthPayload;
  }

  /**
   * Returns the payload decoded from the given auth token.
   * Verifies the signature (secure)
   *
   * @param authToken User Authorization Token
   */
  public async verifyAsync(authToken: string): Promise<UserAuthPayload> {
    return this.jwtService.verifyAsync(authToken);
  }

  /**
   * TODO: Implement this
   * @param password
   */
  private verifyPasswordStrength(password: string) {
    return undefined;
  }

  /**
   * Returns the max age of an auth token in seconds.
   */
  public getTokenMaxAge(): number {
    return this.maxAge;
  }

  /**
   * Gets the user that was specified in the JWT Payload, based on their ID
   * @param payload JWT Payload including user ID
   */
  async validateUser(payload: UserAuthPayload): Promise<User> {
    const user = await this.usersService.getById(payload.userId);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async googleLogin(req) {
    if (!req.user) {
      return { message: 'No user from google', user: undefined };
    }
    const storedUser = await this.usersService.getUserByEmail(req.email);
    console.log(storedUser);

    if (!storedUser) {
      await this.signUp({ email: req.email, password: null, name: req.name });
    } else {
      const token = await this.createAuthToken({ userId: storedUser.id }, 60);

      const userInfo = {
        id: storedUser.id,
        email: storedUser.email,
        name: storedUser.name,
        accessToken: token,
      };
      return { message: undefined, user: userInfo };
    }
  }
}
