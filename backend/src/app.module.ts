import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tags.entity';
import { Benefit } from './entities/benefits.entity';
import { SideEffect } from './entities/side-effects.entity';
import { ThingToKnow } from './entities/things-to-know.entity';
import { Contraceptive } from './entities/contraceptive.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env',
      ],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      entities: [Tag, Benefit, SideEffect, ThingToKnow, Contraceptive, User],
      synchronize: true, // TODO: synchronize true should not be used in a production environment
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}
