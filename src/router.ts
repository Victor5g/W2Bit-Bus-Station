import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from './app/config/multer';
import UserController from './app/Controllers/UserController';
import BusController from './app/Controllers/BusController';
import Passengers from './app/Controllers/Passengers';
import TravelController from './app/Controllers/TravelsController';

const router = Router();

router .get('/bus',BusController.list);
router .get('/bus/:id',BusController.specificListing);

router.post('/users',multer(multerConfig).single('image'),UserController.store);
router.post('/bus',BusController.store);
router.post('/passenger',Passengers.store);
router.post('/travel',TravelController.store);

router.put('/bus/:id',BusController.update);

router.delete('/bus/:id',BusController.delete);

export default router;

