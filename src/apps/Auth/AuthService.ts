import { User } from '@apps/Users/User.entity';
import { dbConnection, auth } from '@config/index';
import { CustomError } from 'express-handler-errors';
import { getConnection, Repository } from 'typeorm';
import jwt from 'jsonwebtoken';

interface AuthDto {
  email: string;
  password: string;
}

class AuthService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getConnection(dbConnection.name).getRepository(User);
  }

  async auth(authUser: AuthDto): Promise<any> {
    try {
      const email = authUser.email;
      const password = authUser.password;

      const userExists = await this.userRepository.findOne({ email });

      if (!userExists) {
        throw new CustomError({
          code: 'USER_NOT_EXISTS',
          message: 'Usuário não existe',
          status: 404,
        });
      }

      // Aqui já sei que o usuário existe
      if (password !== userExists.password) {
        throw new CustomError({
          code: 'INVALID_PASSWORD',
          message: 'Senha inválida',
          status: 401,
        });
      }

      const token = jwt.sign(
        {
          data: userExists,
        },
        auth.secret,
        {
          expiresIn: auth.expiresIn,
        }
      );

      return { token };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw new CustomError({
        code: 'AUTH_ERROR',
        message: 'Erro genérico no login',
        status: 500,
      });
    }
  }

  verifyToken(token: { token: string }) {
    const { token: Token } = token;
    const verifiedToken = jwt.verify(Token, auth.secret);
    return verifiedToken;
  }
}

export default new AuthService();
