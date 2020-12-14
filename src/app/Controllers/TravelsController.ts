import { Request, Response } from 'express';
import { getRepository} from 'typeorm';

import Travels from '../models/Travels';
import Bus from '../models/Bus';

class TravelsController{
  async store(req: Request, res: Response) {
    const repository = getRepository(Travels);
    const verify = getRepository(Bus);

    const {id_bus, id_passengers} = req.body;

    const amount = await repository.count({where:{id_bus:{id_bus}}});
    const capacity = await verify.findOne({where:{id:id_bus}});    


    if(amount <= capacity?.seat_amount!){
      return res.status(409).json({"message":"Full bus"});
   }

      const Travel =  repository.create({id_bus, id_passengers});
      await repository.save(Travel);

      return res.sendStatus(200);
  }

}

export default new TravelsController;