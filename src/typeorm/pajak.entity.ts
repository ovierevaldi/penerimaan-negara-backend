// src/your-entity.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pemasukan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipePajak: string;

  @Column()
  jenisPajak: string;

  @Column()
  wilayah: string;

  @Column()
  jumlah: number;

  @Column()
  tanggal: Date;
}