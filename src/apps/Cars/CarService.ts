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
      //console.log("chegou aq", car)  
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
  async findAll(): Promise<Car[]> {
    try {
      //console.log("chegou aq", car)  
      const cars = await this.carRepository.find();
      return cars;
    } catch (error) {
      throw new CustomError({
        code: 'LIST_CAR_ERROR',
        message: 'Erro ao listar o carro',
        status: 500,
      });
    }
  }
  async alterar(id: string, body: any): Promise<any> {
    try {
      const updateResult = await this.carRepository.update(id, body);

      if (!updateResult.affected) {
        throw new CustomError({
          code: 'UPDATE_CAR_ERROR',
          message: 'Carro não encontrado ou payload incorreto',
          status: 422,
        });
      }

      const updatedCar = await this.carRepository.findOne(id);

      return updatedCar;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw new CustomError({
        code: 'UPDATE_CAR_ERROR',
        message: 'Erro ao atualizar carro',
        status: 500,
      });
    }
  }
 
  async apagar(id: string): Promise<any> {
    try {
      const car = await this.carRepository.findOne(id);

      if (!car) {
        throw new CustomError({
          code: 'CAR_NOT_FOUND',
          message: 'Carro não encontrado',
          status: 404,
        });
      }

      await this.carRepository.delete(car.id);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw new CustomError({
        code: 'DELETE_CAR_ERROR',
        message: 'Erro ao apagar carro',
        status: 500,
      });
    }
  }
}
  export default new CarService();