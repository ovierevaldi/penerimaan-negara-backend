import { Body, Controller, Get, Post } from '@nestjs/common';
import { PajakService } from './pajak.service';
import { PenerimaanPajakDto } from './dto/pajak.dto';

@Controller('pajak')
export class PajakController {
    constructor(private pajakService: PajakService){

    }

    @Post('input-pemasukan')
    async InputPemasukan(@Body() dataPajakDto: PenerimaanPajakDto) : Promise<any> {
        return this.pajakService.inputPajak(dataPajakDto);
    }

    @Get()
    getListPajak(): string {
        return this.pajakService.getListPajak();
    }
}
