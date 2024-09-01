import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pemasukan } from '../typeorm/pajak.entity';
import { InjectRepository } from '@nestjs/typeorm';

const listPajak = [
    {
        noPajak: 1,
        jenis: '11111111',
        jumlah: 'abc123',
        wilayah: '',
        tanggal : ''
    }
]

@Injectable()
export class PajakService {

    constructor(
        @InjectRepository(Pemasukan)
        private readonly pajakRepository: Repository<Pemasukan>,
      ) {}
    
    async inputPajak(payload: any): Promise<any>{
        const newData = this.pajakRepository.create({ tipePajak: payload.tipePajak, jenisPajak: payload.jenisPajak, wilayah: payload.wilayah, jumlah: payload.jumlah, tanggal: payload.tanggal });
        return await this.pajakRepository.save(newData);
    }


    getListPajak(){
        return '';
    }
}
