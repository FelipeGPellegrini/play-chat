import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserService } from './user.service';
import { User } from './user.entity';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private users: Record<string, User> = {};

  constructor(private readonly userService: UserService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    const user = this.users[client.id];
    if (user) {
      this.server.emit('userLeft', `${user.name} saiu do chat.`);
      delete this.users[client.id];
    }
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('join')
  async handleJoin(
    client: Socket,
    payload: { name: string; email: string; password: string },
  ): Promise<void> {
    try {
      const existingUser = await this.userService.findUserByEmail(
        payload.email,
      );

      if (!existingUser) {
        const newUser = await this.userService.createUser(
          payload.name,
          payload.email,
          payload.password,
        );
        this.users[client.id] = newUser;
        this.server.emit('userJoined', newUser.name);
        this.server.to(client.id).emit('authenticationSuccess');
        return;
      }

      const isValidPassword = await this.userService.comparePassword(
        payload.password,
        existingUser.password,
      );

      if (!isValidPassword) {
        client.emit('joinError', 'Senha incorreta');
        return;
      }

      existingUser.name = payload.name;
      this.users[client.id] = existingUser;

      this.server.emit('userJoined', existingUser.name);
      this.server.to(client.id).emit('authenticationSuccess');
    } catch (error) {
      console.error('Error joining:', error.message);
      client.emit('joinError', 'Erro ao entrar no chat');
    }
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void {
    const user = this.users[client.id];
    if (user) {
      const message = { user, content: payload };
      console.log('Received message:', message);
      this.server.emit('message', message);
    }
  }
}
