import { Controller, Get, Param } from '@nestjs/common';
import { ContraceptiveService } from './contraceptive.service';

@Controller('contraceptive')
export class ContraceptiveController {
  constructor(private contraceptiveService: ContraceptiveService) {}

  @Get()
  async getContraceptives() {
    return this.contraceptiveService.getContraceptives();
  }
  @Get(':idd')
  public getContraceptive(@Param('id') id: String) {
    return 'getContraceptive';
  }
}
