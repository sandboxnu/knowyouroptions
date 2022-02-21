import { HttpException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AuthenticatedUser,
  SignInInfo,
  UserAuthPayload,
  UserInfo,
} from 'src/types/user';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_TOKEN_MAX_AGE') private readonly maxAge: number,
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}

  public async signIn(info: SignInInfo): Promise<AuthenticatedUser> {
    const user = await this.usersService.getUser(info);

    // Create temporary login token to send user to.
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

    // Create temporary login token to send user to.
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
      console.error('Temporary JWT is invalid');
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
}
