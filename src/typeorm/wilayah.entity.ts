// src/your-entity.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ListWilayah {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_wilayah: string;
}