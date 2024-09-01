import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PajakModule } from './pajak/pajak.module';
import { Pemasukan, User } from './typeorm';

@Module({
  imports: [AuthModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'pemasukan_pajak',
    entities: [User, Pemasukan],
    synchronize: true
  }), PajakModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
