import { IsInt, IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class PenerimaanPajakDto {
    @IsString()
    @IsNotEmpty()
    readonly tipePajak: string;

    @IsString()
    @IsNotEmpty()
    readonly jenisPajak: string;

    @IsString()
    @IsNotEmpty()
    readonly wilayah: string;

    @IsInt()
    readonly jumlah: number;

    @IsDateString()
    readonly tanggal: string;
}