import { Test, TestingModule } from '@nestjs/testing';
import { CalendarioController } from './calendario.controller';
import { CalendarioService } from './calendario.service';

describe('CalendarioController', () => {
  let controller: CalendarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarioController],
      providers: [CalendarioService],
    }).compile();

    controller = module.get<CalendarioController>(CalendarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
