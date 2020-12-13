import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Passengers from '../models/Passengers';

class PassengersController{
  async store(req: Request, res: Response) {
    const repository = getRepository(Passengers);
    const {name, age, cpf} = req.body;

    const CpfEquals = await repository.findOne({where:{cpf}});

    if(CpfEquals){
      return res.sendStatus(409);
    }

    const passengers =  repository.create({name, age, cpf});
    await repository.save(passengers);

    return res.json(passengers);
  }

}

export default new PassengersController;