"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var authMiddleware_1 = __importDefault(require("./app/middleware/authMiddleware"));
var UploadMiddelware_1 = require("./app/middleware/UploadMiddelware");
var AuthController_1 = __importDefault(require("./app/Controllers/AuthController"));
var UserController_1 = __importDefault(require("./app/Controllers/UserController"));
var BusController_1 = __importDefault(require("./app/Controllers/BusController"));
var Passengers_1 = __importDefault(require("./app/Controllers/Passengers"));
var TravelsController_1 = __importDefault(require("./app/Controllers/TravelsController"));
var router = express_1.Router();
router.get('/bus', authMiddleware_1.default, BusController_1.default.list);
router.get('/bus/:id', authMiddleware_1.default, BusController_1.default.specificListing);
router.get('/passenger', authMiddleware_1.default, Passengers_1.default.list);
router.post('/auth', AuthController_1.default.authenticate);
router.post('/users', multer_1.default(UploadMiddelware_1.multerConfig).single('image'), UserController_1.default.store); //Rever isso Agora
router.post('/bus', authMiddleware_1.default, BusController_1.default.store);
router.post('/passenger', authMiddleware_1.default, Passengers_1.default.store);
router.post('/travel', authMiddleware_1.default, TravelsController_1.default.store);
router.put('/bus/:id', authMiddleware_1.default, BusController_1.default.update);
router.put('/passenger/:id', authMiddleware_1.default, Passengers_1.default.update);
router.delete('/bus/:id', authMiddleware_1.default, BusController_1.default.delete);
router.delete('/passenger/:id', authMiddleware_1.default, Passengers_1.default.delete);
exports.default = router;
