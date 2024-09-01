import { Module } from '@nestjs/common';
import { PajakService } from './pajak.service';
import { PajakController } from './pajak.controller';

@Module({
  providers: [PajakService],
  controllers: [PajakController]
})
export class PajakModule {}
