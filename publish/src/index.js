'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by kerwinliu on 2017/12/14.
 */
// src/index.js
exports.default = [{
    path: '/',
    controller: require('./home/controller')
}, {
    path: '/list',
    controller: require('./list/controller')
}];