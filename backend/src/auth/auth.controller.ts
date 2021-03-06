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
import { SignInInfo, UserInfo } from '../types/user';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AuthController {
  private readonly domain: string;

  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    this.domain = configService.get<string>('DOMAIN');
  }

  @Post('/sign-in')
  async signIn(@Body() signInInfo: SignInInfo) {
    // TODO: *should* sanitize signInInfo
    const result = await this.authService.signIn(signInInfo);

    return {
      redirect: this.domain + `/login/entry?token=${result.accessToken}`,
    };
  }

  @Post('/sign-up')
  async signUp(@Body() userInfo: UserInfo) {
    const result = await this.authService.signUp(userInfo);
    return {
      redirect: this.domain + `/login/entry?token=${result.accessToken}`,
    };
  }

  // NOTE: Although the two routes below are on the backend,
  // they are meant to be visited by the browser so a cookie can be set
  @Get('/login/entry')
  async loginAndAttachCookie(
    @Res() res: Response,
    @Query('token') token: string,
  ): Promise<void> {
    const isVerified = await this.authService.verifyAsync(token);

    if (!isVerified) {
      throw new UnauthorizedException();
    }

    const payload = this.authService.decodeToken(token);

    if (payload === null || payload === undefined) {
      console.error('Decoded JWT is invalid');
      throw new HttpException('JWT is invalid', 500);
    }

    await this.enter(res, payload.userId);
  }

  // Set cookie and redirect to proper page
  private async enter(res: Response, userId: number) {
    // Expires in 30 days
    const authToken = await this.authService.createAuthToken({
      userId: userId,
    });

    //TODO: if authToken undefined

    res
      .cookie('auth_token', authToken, {
        httpOnly: true,
        maxAge: this.authService.getTokenMaxAge(),
        secure: false, // true only sends cookies with requests over HTTPS
      })
      .redirect(302, '/');
  }
}
