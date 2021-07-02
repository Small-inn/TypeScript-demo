"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = __importDefault(require("./crowller"));
var lxAnalyzer_1 = __importDefault(require("./lxAnalyzer"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('Hello world');
});
router.get('/bye', function (req, res) {
    var secret = 'secretKey';
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    // 使用单例模式
    var analyzer = lxAnalyzer_1.default.getInstance();
    new crowller_1.default(url, analyzer);
    res.send('Get Data Success');
});
exports.default = router;
