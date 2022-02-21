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
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
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
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
