import { Module } from '@nestjs/common';
import { ContraceptiveService } from './contraceptive.service';
import { ContraceptiveController } from './contraceptive.controller';

@Module({
  providers: [ContraceptiveService],
  controllers: [ContraceptiveController],
})
export class ContraceptiveModule {}
