import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contraceptive } from 'src/entities/contraceptive.entity';
import { Repository } from 'typeorm';
export class ContraceptiveService {
  constructor(
    @InjectRepository(Contraceptive)
    private readonly contraceptiveRepository: Repository<Contraceptive>,
  ) {}

  public async getContraceptives(): Promise<String> {
    const contraceptiveList = await this.contraceptiveRepository.find();

    return 'what is up';
  }

  public getContraceptive(name: String) {
    const contraceptive = this.contraceptiveRepository.findOne({
      where: [{ name: name }],
    });
    return contraceptive;
  }

  public async postContraceptive(contraceptive) {
    return this.contraceptiveRepository.insert(contraceptive);
  }
}
