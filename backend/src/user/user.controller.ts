import {
  Controller,
  Get,
  Put,
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
//import { BookmarksInfo } from '../types/user';

type BookmarkPostBody = {
  bookmark: string;
};
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
    @Body() body: BookmarkPostBody,
    @CurrentUser() user: User,
  ): Promise<void> {
    await this.UserService.postBookmark(user, body.bookmark);
  }

  //posts one bookmark
  @Delete(':bookmark')
  @UseGuards(JwtAuthGuard)
  async deleteBookmark(
    @CurrentUser() user: User,
    @Body() body: BookmarkPostBody,
  ): Promise<void> {
    this.UserService.deleteBookmark(user, body.bookmark);
  }
}
