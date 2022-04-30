import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { ContraceptiveService } from './contraceptive.service';
import { Contraceptive } from 'src/entities/contraceptive.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/currentuser.decorator';
import { User } from '../entities/user.entity';
@Controller('contraceptive')
export class ContraceptiveController {
  constructor(private contraceptiveService: ContraceptiveService) {}

  @Get()
  async getContraceptives() {
    return this.contraceptiveService.getContraceptives();
  }

  @Get('many')
  async getManyContraceptive(@Body() names: string[]) {
    return this.contraceptiveService.getManyContraceptive(names);
  }

  @Get(':name')
  public getContraceptive(@Param('name') name: string) {
    return this.contraceptiveService.getContraceptive(name);
  }

  @Post()
  async postContraceptive(@Body() contraceptive: Contraceptive) {
    return this.contraceptiveService.postContraceptive(contraceptive);
  }
  @Delete(':name')
  public deleteContraceptive(@Param('name') name: string) {
    return this.contraceptiveService.deleteContraceptive(name);
  }
}
