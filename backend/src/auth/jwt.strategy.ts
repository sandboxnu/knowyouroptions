import { PassportStrategy } from '@nestjs/passport';
import { JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthPayload } from '../types/user';
import { User } from '../entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    @Inject('JWT_SECRET_KEY') private readonly JWT_SECRET_KEY: string,
  ) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: JWT_SECRET_KEY,
    });
  }

  async validate(payload: UserAuthPayload): Promise<User> {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}

const cookieExtractor: JwtFromRequestFunction = (req) => {
  let jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies['auth_token'];
  }

  return jwt;
};
