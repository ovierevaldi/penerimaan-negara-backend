import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to use ConfigService
      inject: [ConfigService], // Inject ConfigService
      useFactory: async (configService: ConfigService) => ({
        type: configService.get<'mysql' | 'postgres' | 'mariadb' | 'sqlite' | 'mongodb'>('DATABASE_TYPE'), // Use the database type from .env
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true, 
        synchronize: true,
      }),
    }),
  ],
  // controllers, providers, etc.
})
export class DatabaseModule {}