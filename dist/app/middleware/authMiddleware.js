"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) {
        return res.sendStatus(401);
    }
    var token = authorization.replace('Bearer', ' ').trim();
    try {
        var data = jsonwebtoken_1.default.verify(token, process.env.APP_SECRET);
        var id = data.id;
        req.UserId = id;
        return next();
    }
    catch (_a) {
        return res.sendStatus(401);
    }
}
exports.default = authMiddleware;
