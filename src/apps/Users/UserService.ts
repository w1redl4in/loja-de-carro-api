import { dbConnection } from '@config/index';
import { CustomError } from 'express-handler-errors';
import { getConnection, Repository } from 'typeorm';
import { User } from './User.entity';

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getConnection(dbConnection.name).getRepository(User);
  }

  async create(user: any): Promise<User> {
    try {
      const userCreated = await this.userRepository.save(user);
      return userCreated;
    } catch (error) {
      throw new CustomError({
        code: 'CREATE_USER_ERROR',
        message: 'Erro ao criar o usuário',
        status: 500,
      });
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      throw new CustomError({
        code: 'LIST_USERS_ERROR',
        message: 'Erro ao listar usuários',
        status: 500,
      });
    }
  }

  async apagar(id: string): Promise<any> {
    try {
      const user = await this.userRepository.findOne(id);

      if (!user) {
        throw new CustomError({
          code: 'USER_NOT_FOUND',
          message: 'Usuário não encontrado',
          status: 404,
        });
      }

      await this.userRepository.delete(user.id);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw new CustomError({
        code: 'DELETE_USER_ERROR',
        message: 'Erro ao apagar usuário',
        status: 500,
      });
    }
  }

  async alterar(id: string, body: any): Promise<any> {
    try {
      const updateResult = await this.userRepository.update(id, body);

      if (!updateResult.affected) {
        throw new CustomError({
          code: 'UPDATE_USER_ERROR',
          message: 'Usuário não encontrado ou payload incorreto',
          status: 422,
        });
      }

      const updatedUser = await this.userRepository.findOne(id);

      return updatedUser;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw new CustomError({
        code: 'UPDATE_USER_ERROR',
        message: 'Erro ao atualizar usuário',
        status: 500,
      });
    }
  }
}

export default new UserService();
