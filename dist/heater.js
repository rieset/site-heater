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
exports.Heater = void 0;
const Generator = require('sitemap-generator');
class Heater {
    constructor(url) {
        this.generator = Generator(url, {
            filepath: "./sitemap.xml",
            stripQuerystring: true,
            priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2, 0],
            changeFreq: "daily",
            maxDepth: 10,
            timeout: 999999,
            queueItem: 1,
            userAgent: 'site-heater',
        });
        this.crawler = this.generator.getCrawler();
        this.sitemap = this.generator.getSitemap();
        this.crawler.on('crawlstart', this.processor.bind(this));
        this.generator.on('error', this.errorHandler.bind(this));
        this.generator.on('add', this.addHandler.bind(this));
        this.crawler.on("fetchcomplete", function (queueItem, responseBuffer, response) {
            var _a, _b, _c, _d;
            console.log("\nStatus: %d\t\tLatency %ds\t\tDownload %ds\t\tRequest %ds\t\t", (_a = queueItem === null || queueItem === void 0 ? void 0 : queueItem.stateData) === null || _a === void 0 ? void 0 : _a.code, ((_b = queueItem === null || queueItem === void 0 ? void 0 : queueItem.stateData) === null || _b === void 0 ? void 0 : _b.requestLatency) / 1000, ((_c = queueItem === null || queueItem === void 0 ? void 0 : queueItem.stateData) === null || _c === void 0 ? void 0 : _c.downloadTime) / 1000, ((_d = queueItem === null || queueItem === void 0 ? void 0 : queueItem.stateData) === null || _d === void 0 ? void 0 : _d.requestTime) / 1000);
            console.log("Page %s\n", queueItem.url);
        });
    }
    process() {
        return new Promise((resolve, reject) => {
            this.generator.on('done', () => {
                resolve(true);
            });
            this.generator.queueURL('https://wavesenterprise.com');
            this.generator.start();
        });
    }
    processor(options, done) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('options', options, done);
            // this.sitemap.addURL('/my/static/url')
        });
    }
    addHandler(url) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log('Add', url);
        });
    }
    errorHandler(error) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('error', error);
        });
    }
}
exports.Heater = Heater;
