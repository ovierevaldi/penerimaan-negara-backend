import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pemasukan } from '../typeorm/pajak.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ListWilayah } from 'src/typeorm/wilayah.entity';

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
        @InjectRepository(ListWilayah)
        private readonly wilayahRepository: Repository<ListWilayah>,

    ) {}
    
    async inputPajak(payload: any): Promise<any>{
        const newData = this.pajakRepository.create({ tipePajak: payload.tipePajak, jenisPajak: payload.jenisPajak, wilayah: payload.wilayah, jumlah: payload.jumlah, tanggal: payload.tanggal });
        return await this.pajakRepository.save(newData);
    }

    getListWilayah(): Promise<ListWilayah[]>{
        return this.wilayahRepository.find();
    }

    async deleteWilayah(id: number): Promise<void>{
        const result = await this.wilayahRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Wilayah dengan ID ${id} not found`);
        }
    }
}
