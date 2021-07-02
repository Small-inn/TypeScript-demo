"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// import path from 'path'
// import superagent from 'superagent'
var cheerio_1 = __importDefault(require("cheerio"));
var lxAnalyzer = /** @class */ (function () {
    function lxAnalyzer() {
    }
    lxAnalyzer.getInstance = function () {
        if (!this.instance) {
            this.instance = new lxAnalyzer();
        }
        return this.instance;
    };
    lxAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseItems = $('.course-item');
        var courseInfos = [];
        courseItems.map(function (index, ele) {
            var random = (Math.floor(Math.random() * 100)).toString();
            var descs = $(ele).find('.course-desc');
            var title = descs.eq(0).text();
            var count = parseInt(descs.eq(0).text().split('：')[1] || random, 10);
            courseInfos.push({ title: title, count: count });
        });
        return {
            time: new Date().getTime(),
            data: courseInfos
        };
    };
    lxAnalyzer.prototype.generateJsonContent = function (courseResult, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    };
    lxAnalyzer.prototype.analyze = function (html, filePath) {
        var courseResult = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseResult, filePath);
        return JSON.stringify(fileContent);
    };
    return lxAnalyzer;
}());
exports.default = lxAnalyzer;
