import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      nullable: false  
    })
    username: number

    @Column({
        nullable: false  
    })
    password: string

    @Column({
        nullable: false,
        default: 2  
    })
    role: number
}