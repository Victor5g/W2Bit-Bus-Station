"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./app/config/env");
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("./app/config/env");
require("./database/connect");
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(router_1.default);
app.listen(3333, function () { return console.log("🔥 Server Started ✅"); });
