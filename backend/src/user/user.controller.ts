import {
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/currentuser.decorator';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('bookmarks')
  @UseGuards(JwtAuthGuard)
  async getBookmarks(@CurrentUser() user: User): Promise<string[]> {
    return user.bookmarks;
  }

  //posts one bookmark
  @Post('bookmark')
  @UseGuards(JwtAuthGuard)
  async postBookmark(
    @CurrentUser() user: User,
    @Body() bookmarks,
  ): Promise<User> {
    return this.UserService.postBookmark(user, bookmarks);
  }

  //posts one bookmark
  @Delete(':bookmark')
  @UseGuards(JwtAuthGuard)
  async deleteBookmark(
    @CurrentUser() user: User,
    @Param('bookmark') bookmark: string,
  ): Promise<string[]> {
    return this.UserService.deleteBookmark(user, bookmark);
  }
}
