import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from './app/config/multer';
import UserController from './app/Controllers/UserController';
import BusController from './app/Controllers/BusController';

const router = Router();

router.post('/users',multer(multerConfig).single('image'),UserController.store);
router .post('/bus',BusController.store);

export default router;

