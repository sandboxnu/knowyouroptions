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
    console.log('test');
    await this.UserService.postBookmark(user, body.bookmark);
  }

  //deletes one bookmark
  @Delete('bookmark')
  @UseGuards(JwtAuthGuard)
  async deleteBookmark(
    @Body() body: BookmarkPostBody,
    @CurrentUser() user: User,
  ): Promise<void> {
    console.log(body);
    this.UserService.deleteBookmark(user, body.bookmark);
  }
}
