import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Users from '../models/Users';

class UserController{
  async store(req: Request, res: Response) {
    const repository = getRepository(Users)
    const {name, state, city, password} = req.body;
    const image = req.file.path;

    const passwordEqual = await repository.findOne({where:{password}});

    if(passwordEqual){
      res.sendStatus(489);
    }

    const user = repository.create({name, image, state, city ,password});
    await repository.save(user);

    return res.json(user);

  }

}

export default new UserController;