import { dbConnection } from '@config/index';
import { CustomError } from 'express-handler-errors';
import { getConnection, Repository } from 'typeorm';
import { Car } from './Car.entity';

class CarService {
  private carRepository: Repository<Car>;

  constructor() {
    this.carRepository = getConnection(dbConnection.name).getRepository(Car);
  }

  async create(car: any): Promise<Car> {
    try {
      console.log("chegou aq", car)  
      const carCreated = await this.carRepository.save(car);
      return carCreated;
    } catch (error) {
      throw new CustomError({
        code: 'CREATE_CAR_ERROR',
        message: 'Erro ao criar o carro',
        status: 500,
      });
    }
  }
}
  export default new CarService();