import { Column, Entity } from "typeorm";

@Entity()
export class User{
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