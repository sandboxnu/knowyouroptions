import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CurrentUser } from './decorators/currentuser.decorator';
import { User } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*
    NOTES:
    - JwtAuthGuard is an AuthGuard that restricts this route to only authenticated users
        - Currently, this means that anyone making a GET request to /name/ has to have
          a JWT auth_token in their cookies, attached to the request
        - JwtAuthGuard takes the request, verifies the JWT in the cookies, and injects 
          the current user into the Request  (see JwtStrategy)
    - AuthGuards can be used at the route level, or the controller level
    
    - @CurrentUser() is a decorator that allows us to access the currently authenticated
      user in a route that uses the JwtAuthGuard
   */
  /**
   * Returns the name of the currently logged-in user
   *
   * @param user
   */
  @Get('name')
  @UseGuards(JwtAuthGuard)
  async name(@CurrentUser() user: User): Promise<string> {
    return user.name;
  }
}
