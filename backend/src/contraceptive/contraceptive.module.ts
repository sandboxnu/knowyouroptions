import { Module } from '@nestjs/common';
import { ContraceptiveService } from './contraceptive.service';
import { ContraceptiveController } from './contraceptive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contraceptive } from '../entities/contraceptive.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contraceptive])],
  providers: [ContraceptiveService],
  controllers: [ContraceptiveController],
})
export class ContraceptiveModule {}
