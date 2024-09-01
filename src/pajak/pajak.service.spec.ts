import { Test, TestingModule } from '@nestjs/testing';
import { PajakService } from './pajak.service';

describe('PajakService', () => {
  let service: PajakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PajakService],
    }).compile();

    service = module.get<PajakService>(PajakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
