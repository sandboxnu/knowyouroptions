import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Query,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserInfo } from '../types/user';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { Connection } from 'typeorm';

@Controller()
export class AuthController {
  constructor(
    private connection: Connection,
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/sign-up')
  async signUp(@Body() userInfo: UserInfo) {
    const result = await this.authService.signUp(userInfo);
    return {
      redirect: `localhost:3001/login/entry?token=${result.accessToken}`,
    };
  }

  // NOTE: Although the two routes below are on the backend,
  // they are meant to be visited by the browser so a cookie can be set
  @Get('/login/entry')
  async loginAndAttachCookie(
    @Res() res: Response,
    @Query('token') token: string,
  ): Promise<void> {
    const isVerified = await this.jwtService.verifyAsync(token);

    if (!isVerified) {
      throw new UnauthorizedException();
    }

    const payload = this.jwtService.decode(token) as { userId: number };

    if (payload === null || payload === undefined) {
      console.error('Decoded JWT is invalid');
      throw new HttpException('JWT is invalid', 500);
    }

    this.enter(res, payload.userId);
  }

  // Set cookie and redirect to proper page
  private async enter(res: Response, userId: number) {
    // Expires in 30 days
    const authToken = await this.jwtService.signAsync({
      userId,
      expiresIn: 60 * 60 * 24 * 30,
    });

    if (authToken === null || authToken === undefined) {
      throw new HttpException('invalid jwt', 500);
    }

    res
      .cookie('auth_token', authToken, { httpOnly: true, secure: false }) // todo figure out is securew
      .redirect(302, '/');
  }
}