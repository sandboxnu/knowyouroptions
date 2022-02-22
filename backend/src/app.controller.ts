import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
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
  async cookieTest(@Req() request: Request): Promise<number> {
    const authToken = request.cookies.auth_token;
    return (await this.authService.verifyAsync(authToken)).userId;
  }

  @Get('name')
  async name(@Req() request: Request): Promise<string> {
    const userId = await this.cookieTest(request);
    const user = await this.userService.getById(userId);
    return user.name;
  }
}
