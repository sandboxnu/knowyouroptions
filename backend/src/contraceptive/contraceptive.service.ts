import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contraceptive } from 'src/entities/contraceptive.entity';
import { Repository } from 'typeorm';
export class ContraceptiveService {
  constructor(
    @InjectRepository(Contraceptive)
    private readonly contraceptiveRepository: Repository<Contraceptive>,
  ) {}

  public async getContraceptives(): Promise<Contraceptive[]> {
    const contraceptiveList = await this.contraceptiveRepository.find({});

    return contraceptiveList;
  }
}
