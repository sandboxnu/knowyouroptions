import { Test, TestingModule } from '@nestjs/testing';
import { ContraceptiveService } from './contraceptive.service';

describe('ContraceptiveService', () => {
  let service: ContraceptiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContraceptiveService],
    }).compile();

    service = module.get<ContraceptiveService>(ContraceptiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
