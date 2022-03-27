import { PassportStrategy } from '@nestjs/passport';
import { JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthPayload } from '../types/user';
import { User } from '../entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: UserAuthPayload): Promise<User> {
    // TODO: payload validation
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new HttpException(
        'User is not authenticated',
        HttpStatus.UNAUTHORIZED,
      );
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
