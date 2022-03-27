import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    exposedHeaders: ['set-cookie'],
    allowedHeaders: ['Content-Type', 'X-Requested-With'],
    origin: ['http://localhost:3000'],
  });
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
