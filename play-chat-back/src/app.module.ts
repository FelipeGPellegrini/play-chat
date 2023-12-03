import { Module } from '@nestjs/common';
import { ChatGateway } from './app.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'chat',
      password: 'chat123',
      database: 'play-chat',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [],
  providers: [ChatGateway, UserService],
})
export class AppModule {}
