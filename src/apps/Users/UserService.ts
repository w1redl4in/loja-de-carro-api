import { getConnection, Repository } from 'typeorm';
import { User } from './User.entity';

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getConnection('mysql').getRepository(User);
  }

  async create(user: User): Promise<User> {
    try {
      return this.userRepository.save(user);
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }
}

export default new UserService();
