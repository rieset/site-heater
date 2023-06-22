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
Object.defineProperty(exports, "__esModule", { value: true });
exports.heating = void 0;
const heater_1 = require("./heater");
const heating = (url) => __awaiter(void 0, void 0, void 0, function* () {
    if (!url) {
        console.error('URL is not specified');
    }
    else {
        const deployer = new heater_1.Heater(url);
        return deployer.process()
            .then((r) => {
            process.exit(0);
            return r;
        })
            .catch((r) => {
            process.exit(1);
            return r;
        });
    }
    return false;
});
exports.heating = heating;
