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
type NamePostBody = {
  name: string;
};
type EmailPostBody = {
  email: string;
};
type PronounsPostBody = {
  pronouns: string;
};
type UserInfoType = {
  name: string;
  email: string;
  pronouns: string;
};
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('bookmarks')
  @UseGuards(JwtAuthGuard)
  async getBookmarks(@CurrentUser() user: User): Promise<string[]> {
    return user.bookmarks;
  }
  @Get('email')
  @UseGuards(JwtAuthGuard)
  async getEmail(@CurrentUser() user: User): Promise<string> {
    return user.email;
  }
  @Get('pronouns')
  @UseGuards(JwtAuthGuard)
  async getPronouns(@CurrentUser() user: User): Promise<string> {
    return user.pronouns;
  }

  @Post('name')
  @UseGuards(JwtAuthGuard)
  async postName(
    @CurrentUser() user: User,
    @Body() body: NamePostBody,
  ): Promise<void> {
    this.UserService.postName(user, body.name);
  }
  @Post('email')
  @UseGuards(JwtAuthGuard)
  async postEmail(
    @CurrentUser() user: User,
    @Body() body: EmailPostBody,
  ): Promise<void> {
    this.UserService.postEmail(user, body.email);
  }
  @Post('pronouns')
  @UseGuards(JwtAuthGuard)
  async postPronouns(
    @CurrentUser() user: User,
    @Body() body: PronounsPostBody,
  ): Promise<void> {
    this.UserService.postPronouns(user, body.pronouns);
  }

  @Get('user-info')
  @UseGuards(JwtAuthGuard)
  async getUserInfo(@CurrentUser() user: User): Promise<UserInfoType> {
    return { name: user.name, email: user.email, pronouns: user.pronouns };
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
  @Delete('delete-data')
  @UseGuards(JwtAuthGuard)
  async deleteData(@CurrentUser() user: User): Promise<void> {
    this.UserService.deleteData(user);
  }
}
