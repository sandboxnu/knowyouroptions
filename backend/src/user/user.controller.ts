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
    @Body() bookmarks: string,
    @CurrentUser() user: User,
  ): Promise<any> {
    //console.log('in user controller for post');
    return this.UserService.postBookmark(user, bookmarks);
    //const updatedUser = user.bookmarks.push(bookmarks);
    //return updatedUser;
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
