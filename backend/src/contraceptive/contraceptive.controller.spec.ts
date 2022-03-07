import { Test, TestingModule } from '@nestjs/testing';
import { ContraceptiveController } from './contraceptive.controller';

describe('ContraceptiveController', () => {
  let controller: ContraceptiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContraceptiveController],
    }).compile();

    controller = module.get<ContraceptiveController>(ContraceptiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
