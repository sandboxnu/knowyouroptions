import { Controller, Get, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * This is a proof of concept for cookies and basically just returns the cookie
   * @param request
   * @returns
   */
  @Get('cookieTest')
  cookieTest(@Req() request: Request): number {
    const authToken = request.cookies.auth_token;
    const userId = this.jwtService.decode(authToken) as { userId: number };
    return userId.userId;
  }
}
