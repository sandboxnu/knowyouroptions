import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Module({ providers: [UserService] })
export class AuthModule {}
