import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from './app/config/multer';
import UserController from './app/Controllers/UserController';
import BusController from './app/Controllers/BusController';
import PassengersContoller from './app/Controllers/Passengers';
import TravelController from './app/Controllers/TravelsController';

const router = Router();

router .get('/bus',BusController.list);
router .get('/bus/:id',BusController.specificListing);

router.post('/users',multer(multerConfig).single('image'),UserController.store);
router.post('/bus',BusController.store);
router.post('/passenger',PassengersContoller.store);
router.post('/travel',TravelController.store);

router.put('/bus/:id',BusController.update);
router.put('/passenger/:id', PassengersContoller.update)

router.delete('/bus/:id',BusController.delete);
router.delete('/passenger/:id',PassengersContoller.delete);

export default router;

