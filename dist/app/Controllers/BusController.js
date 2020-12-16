"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Bus_1 = __importDefault(require("../models/Bus"));
var BusController = /** @class */ (function () {
    function BusController() {
    }
    BusController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id_user, _a, vehicle_plate, year, model, seat_amount, vehiclePlateEquals, bus;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = typeorm_1.getRepository(Bus_1.default);
                        id_user = req.UserId;
                        _a = req.body, vehicle_plate = _a.vehicle_plate, year = _a.year, model = _a.model, seat_amount = _a.seat_amount;
                        return [4 /*yield*/, repository.findOne({ where: { vehicle_plate: vehicle_plate } })];
                    case 1:
                        vehiclePlateEquals = _b.sent();
                        if (vehiclePlateEquals) {
                            return [2 /*return*/, res.sendStatus(409)];
                        }
                        bus = repository.create({ id_user: id_user, vehicle_plate: vehicle_plate, year: year, model: model, seat_amount: seat_amount });
                        return [4 /*yield*/, repository.save(bus)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.json(bus)];
                }
            });
        });
    };
    BusController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, bus, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = typeorm_1.getRepository(Bus_1.default);
                        id = req.UserId;
                        return [4 /*yield*/, repository.find({ where: { id_user: id } })];
                    case 1:
                        bus = _a.sent();
                        result = Object.entries(bus).length;
                        if (result == 0) {
                            return [2 /*return*/, res.status(404)];
                        }
                        return [2 /*return*/, res.status(200).json(bus)];
                }
            });
        });
    };
    BusController.prototype.specificListing = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, bus, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = typeorm_1.getRepository(Bus_1.default);
                        id = req.params.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, repository.findOneOrFail({ id: id })];
                    case 2:
                        bus = _b.sent();
                        result = Object.entries(bus).length;
                        if (result == 0) {
                            return [2 /*return*/, res.status(404)];
                        }
                        return [2 /*return*/, res.status(200).json(bus)];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, res.sendStatus(400)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BusController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, _a, vehicle_plate, year, model, seat_amount, idExist, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        repository = typeorm_1.getRepository(Bus_1.default);
                        id = req.params.id;
                        _a = req.body, vehicle_plate = _a.vehicle_plate, year = _a.year, model = _a.model, seat_amount = _a.seat_amount;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, repository.findOne({ id: id })];
                    case 2:
                        idExist = _c.sent();
                        if (!idExist) return [3 /*break*/, 4];
                        return [4 /*yield*/, repository.createQueryBuilder().update()
                                .set({ vehicle_plate: vehicle_plate,
                                year: year,
                                model: model,
                                seat_amount: seat_amount })
                                .where("id = :id", { id: id }).execute()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/, res.sendStatus(200)];
                    case 4: return [2 /*return*/, res.sendStatus(404)];
                    case 5:
                        _b = _c.sent();
                        return [2 /*return*/, res.sendStatus(400)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BusController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, idExist, a, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = typeorm_1.getRepository(Bus_1.default);
                        id = req.params.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, repository.findOne({ id: id })];
                    case 2:
                        idExist = _b.sent();
                        if (!idExist) return [3 /*break*/, 4];
                        return [4 /*yield*/, repository.delete(id)];
                    case 3:
                        a = _b.sent();
                        return [2 /*return*/, res.sendStatus(200)];
                    case 4: return [2 /*return*/, res.sendStatus(404)];
                    case 5:
                        _a = _b.sent();
                        return [2 /*return*/, res.sendStatus(400)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return BusController;
}());
exports.default = new BusController;
