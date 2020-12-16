"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
var multer_1 = require("multer");
var path_1 = require("path");
var crypto_1 = require("crypto");
exports.multerConfig = {
    dest: path_1.resolve(__dirname, '../../uploads'),
    storage: multer_1.diskStorage({
        destination: function (request, file, callback) {
            callback(null, path_1.resolve(__dirname, '..', '..', 'upload'));
        },
        filename: function (request, file, callback) {
            crypto_1.randomBytes(16, function (error, hash) {
                if (error) {
                    callback(error, file.filename);
                }
                var filename = hash.toString('hex') + ".png";
                callback(null, filename);
            });
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: function (request, file, callback) {
        var formats = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];
        if (formats.includes(file.mimetype)) {
            callback(null, true);
        }
        else {
            callback(new Error('Format not accepted'));
        }
    }
};
