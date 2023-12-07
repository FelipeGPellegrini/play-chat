import { Module } from '@nestjs/common';
import { ChatGateway } from './app.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'play-chat.c8jmon7bi712.us-east-2.rds.amazonaws.com',
      port: 5432,
      username: 'chat',
      password: 'chat1234',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [],
  providers: [ChatGateway, UserService],
})
export class AppModule {}
