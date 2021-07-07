import { getConnection, Repository } from 'typeorm';
import { User } from './User.entity';

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getConnection('mysql').getRepository(User);
  }

  async create(user: any): Promise<User> {
    try {
      const userCreated = await this.userRepository.save(user);
      return userCreated;
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }
  
  async apagar(id: string): Promise<any> {
    try {
      return this.userRepository.delete(id)
    } catch (error) {
      throw new Error('Erro ao deletar usuario');
    }
  }

  async alterar(id: string,body:any): Promise<any> {
    try {
      const updateuser = await this.userRepository.update(id,body)
      return updateuser
    } catch (error) {
      throw new Error('Erro ao alterar usuario');
    }
  }
}

export default new UserService();
