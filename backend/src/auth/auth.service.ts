import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatedUser, UserInfo } from 'src/types/user';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}

  public async signUp(userInfo: UserInfo): Promise<AuthenticatedUser> {
    this.verifyPasswordStrength(userInfo.password);

    const user = await this.usersService.createUser(userInfo);

    // Create temporary login token to send user to.
    const token = await this.jwtService.signAsync(
      { userId: user.id },
      { expiresIn: 60 },
    );

    if (token === null || token === undefined) {
      console.error('Temporary JWT is invalid');
      throw new HttpException('Invalid JWT Token', 500);
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      accessToken: token,
    };
  }

  /**
   * TODO: Implement this
   * @param password
   */
  private verifyPasswordStrength(password: string) {
    return undefined;
  }
}
