import { Injectable } from '@nestjs/common';

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
    inputPajak(payload: any): string{
        console.log(payload)
        return "Input Pemasukan Sukses"
    }


    getListPajak(){
        return '';
    }
}
