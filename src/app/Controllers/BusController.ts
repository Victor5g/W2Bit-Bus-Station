import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Bus from '../models/Bus';

class BusController{
  async store(req: Request, res: Response) {
    const repository = getRepository(Bus);
    const {id_user, vehicle_plate, year, model,seat_amount} = req.body;

    const vehiclePlateEquals = await repository.findOne({where:{vehicle_plate}});

    if(vehiclePlateEquals){
      return res.sendStatus(409);
    }

    const bus =  repository.create({id_user, vehicle_plate, year, model, seat_amount});
    await repository.save(bus);

    return res.json(bus);
  }

}

export default new BusController;