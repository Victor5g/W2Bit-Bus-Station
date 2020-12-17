import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';

import Users from '../models/Users';

class AuthController{
  async authenticate(req: Request, res: Response) {
    const repository = getRepository( Users);
    const { name, password } = req.body;

   try{
    const user = await repository.findOne({where:{password}});

    if(!user){
      return res.sendStatus(404);
    }

    if(password != user.password){
      return res.sendStatus(401);
    }

   const token = jwt.sign({ id: user.id}, process.env.APP_SECRET!,{expiresIn:'1d'});
   
   return res.status(200).json({user, token});

  } catch {
    return res.sendStatus(400);
  }
 }
}

export default new AuthController;