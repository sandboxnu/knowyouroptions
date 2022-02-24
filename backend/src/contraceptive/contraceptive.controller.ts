import { Controller, Get } from '@nestjs/common';
import { ContraceptiveService } from './contraceptive.service';

@Controller('contraceptive')
export class ContraceptiveController {
  constructor(private contraceptiveService: ContraceptiveService) {}

  @Get()
  async getContraceptives() {
    return this.contraceptiveService.getContraceptives();
  }
}
