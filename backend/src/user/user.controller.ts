import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { UseGuards } from '@nestjs/common';
//import { AppService } from './app.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/currentuser.decorator';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  public getUser(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  public getBookmarks(@CurrentUser() user: User): string[] {
    return ['dfsdf'];
  }
}
