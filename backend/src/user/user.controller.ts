import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class userController {
  constructor(private userService: UserService) {}

  @Get(':id')
  public getUser(@Param('id') id: number) {
    return this.userService.getById(id);
  }
}
