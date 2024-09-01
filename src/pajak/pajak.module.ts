import { Module } from '@nestjs/common';
import { PajakService } from './pajak.service';
import { PajakController } from './pajak.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pemasukan } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pemasukan])],
  providers: [PajakService],
  controllers: [PajakController]
})
export class PajakModule {}
