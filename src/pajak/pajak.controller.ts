import { Body, Controller, Get, Post } from '@nestjs/common';
import { PajakService } from './pajak.service';
import { PenerimaanPajakDto } from './dto/pajak.dto';

@Controller('pajak')
export class PajakController {
    constructor(private pajakService: PajakService){

    }

    @Post('input-pemasukan')
    async InputPemasukan(@Body() dataPajakDto: PenerimaanPajakDto) {
        const response = this.pajakService.inputPajak(dataPajakDto);
        return { message: response };
    }

    @Get()
    getListPajak(): string {
        return this.pajakService.getListPajak();
    }
}
