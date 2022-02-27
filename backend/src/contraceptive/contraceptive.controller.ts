import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ContraceptiveService } from './contraceptive.service';
import { Contraceptive } from 'src/entities/contraceptive.entity';

@Controller('contraceptive')
export class ContraceptiveController {
  constructor(private contraceptiveService: ContraceptiveService) {}

  @Get()
  async getContraceptives() {
    return this.contraceptiveService.getContraceptives();
  }
  @Get(':idd')
  public getContraceptive(@Param('id') id: string) {
    return 'getContraceptive';
  }

  @Post()
  async postContraceptive(@Body() contraceptive: Contraceptive) {
    return this.contraceptiveService.postContraceptive(contraceptive);
  }
}
