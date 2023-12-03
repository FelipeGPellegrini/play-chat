import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { email } });
    } catch (error) {
      console.error('Error finding user by email:', error.message);
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
