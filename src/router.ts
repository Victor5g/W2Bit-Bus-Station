import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from './app/config/multer';
import UserController from './app/Controllers/UserController';

const router = Router();

router.post('/users',multer(multerConfig).single('image'),UserController.store);

export default router;

