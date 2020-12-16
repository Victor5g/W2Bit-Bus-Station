import { Router } from 'express';
import multer from 'multer';

import authMiddleware from './app/middleware/authMiddleware';
import { multerConfig } from './app/middleware/UploadMiddelware';

import AuthController from './app/Controllers/AuthController';
import UserController from './app/Controllers/UserController';
import BusController from './app/Controllers/BusController';
import PassengersContoller from './app/Controllers/Passengers';
import TravelController from './app/Controllers/TravelsController';

const router = Router();


router .get('/bus',authMiddleware,BusController.list);
router .get('/bus/:id',authMiddleware,BusController.specificListing);

router.post('/auth',AuthController.authenticate);
router.post('/users',multer(multerConfig).single('image'),UserController.store);//Rever isso Agora
router.post('/bus',authMiddleware,BusController.store);
router.post('/passenger',authMiddleware,PassengersContoller.store);
router.post('/travel',authMiddleware,TravelController.store);

router.put('/bus/:id',authMiddleware,BusController.update);
router.put('/passenger/:id',authMiddleware,PassengersContoller.update)

router.delete('/bus/:id',authMiddleware,BusController.delete);
router.delete('/passenger/:id',authMiddleware,PassengersContoller.delete);

export default router;

