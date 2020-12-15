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


  async update(req:Request, res:Response){
    const repository = getRepository(Passengers);
    const {id} = req.params;
    const {name, age, cpf} = req.body;
  
   try{
  
      const idExist = await repository.findOne({id:id});
  
      if(idExist){
  
      await repository.createQueryBuilder().update()
      .set({name:name,
            age:age,
            cpf:cpf
          })
      .where("id = :id", { id: id }).execute();
  
        return res.sendStatus(200);
      }
        return res.sendStatus(404);
  
    } catch {
      return res.sendStatus(400);
  
    }
  }
}

export default new PassengersController;