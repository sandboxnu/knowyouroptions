import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'AUTH_TOKEN_MAX_AGE',
      useValue: 2629800000,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
