import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Bus from '../models/Bus';

class  BusController{

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


   async list(req: Request, res:Response){
      const repository = getRepository(Bus);
  
      const bus = await repository.find();
      const result = Object.entries(bus).length;

    if(result == 0){
        return res.status(404);
    }

      return res.status(200).json(bus);
  }



   async specificListing(req: Request, res: Response){
      const repository = getRepository(Bus);
      const {id} = req.params;

    try {

      const bus =  await repository.findOneOrFail({id:id});
      const result = Object.entries(bus).length;

      if(result == 0){
        return res.status(404);
      }
        return res.status(200).json(bus);
        
    } catch {
        return res.sendStatus(400);

      } 
  }



  async update(req:Request, res:Response){
  const repository = getRepository(Bus);
  const {id} = req.params;
  const {vehicle_plate, year, model, seat_amount} = req.body;

 try{

    const idExist = await repository.findOne({id:id});

    if(idExist){

    await repository.createQueryBuilder().update()
    .set({ vehicle_plate: vehicle_plate,
           year: year,
           model: model,
           seat_amount:seat_amount })
    .where("id = :id", { id: id }).execute();

      return res.sendStatus(200);
    }
      return res.sendStatus(404);

  } catch{
    return res.sendStatus(400);

  }
}



  async delete(req: Request, res: Response){
    const repository = getRepository(Bus);
    const {id} = req.params;

   try{

      const idExist = await repository.findOne({id:id});

      if(idExist){
        const a = await repository.delete(id);
        return res.sendStatus(200);
      }
        return res.sendStatus(404);

    } catch{
      return res.sendStatus(400);

    }
  }
}

export default new BusController;