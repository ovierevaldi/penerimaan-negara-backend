import { Test, TestingModule } from '@nestjs/testing';
import { PajakController } from './pajak.controller';

describe('PajakController', () => {
  let controller: PajakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PajakController],
    }).compile();

    controller = module.get<PajakController>(PajakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
