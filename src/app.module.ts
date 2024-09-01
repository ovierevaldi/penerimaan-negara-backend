import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PajakModule } from './pajak/pajak.module';
import { Pemasukan, User } from './typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
  ConfigModule.forRoot({
    envFilePath: '.env', // Path to your .env file
    isGlobal: true,      // Makes the configuration globally available
  }),
  DatabaseModule,
  AuthModule,PajakModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
