import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Users from '../models/Users';

class UserController{
  async store(req: Request, res: Response) {
    const repository = getRepository(Users)
    const {name, state, city, password} = req.body;
    const image = req.file.path;

   try{
    const passwordEqual = await repository.findOne({where:{password}});

    if(passwordEqual){
      return res.sendStatus(409);
    }

    const user = repository.create({name, image, state, city ,password});
    await repository.save(user);
    return res.json(user);

  } catch {
    return res.sendStatus(400);
  }
  }
}

export default new UserController;