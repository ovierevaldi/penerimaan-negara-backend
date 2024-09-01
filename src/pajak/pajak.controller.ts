import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PajakService } from './pajak.service';
import { PenerimaanPajakDto } from './dto/pajak.dto';
import { ListWilayah } from 'src/typeorm';

@Controller('pajak')
export class PajakController {
    constructor(private pajakService: PajakService){

    }

    @Post('input-pemasukan')
    async InputPemasukan(@Body() dataPajakDto: PenerimaanPajakDto) : Promise<any> {
        return this.pajakService.inputPajak(dataPajakDto);
    }

    @Get('list-wilayah')
    getListWilayah(): Promise<ListWilayah[]>  {
        return this.pajakService.getListWilayah();
    }

   
    @Delete('delete-wilayah/:id')
    async deleteWilayah(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.pajakService.deleteWilayah(id);
    }
}
