'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by kerwinliu on 2017/12/14.
 */
process.env.NODE_ENV = 'production';

var fs = require('fs');
var path = require('path');
var ReactIMVC = require('react-imvc');
var config = require('./imvc.config');

config = config.default || config;

ReactIMVC.start({
    config: _extends({}, config, {
        port: 3333,
        root: __dirname,
        logger: 'dev'
    })
});