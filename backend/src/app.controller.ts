import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  cookieTest(@Req() request: Request): string {
    return request.cookies;
  }
}
