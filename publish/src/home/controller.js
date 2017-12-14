'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by kerwinliu on 2017/12/14.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
// src/home/Controller
// 加载 react-imvc controller 控制器


var Home = function (_Controller) {
    _inherits(Home, _Controller);

    // 将 react 组件赋值给控制器的 View 属性
    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.View = View, _temp), _possibleConstructorReturn(_this, _ret);
    } // 继承它，编写你的控制器逻辑


    return Home;
}(_controller2.default);

exports.default = Home;


function View() {
    return _react2.default.createElement(
        _component.Link,
        { as: 'div', to: '/list' },
        _react2.default.createElement(
            'h1',
            null,
            'Hello React-IMVC'
        ),
        _react2.default.createElement(
            'p',
            null,
            '\u8DF3\u8F6C\u5217\u8868'
        )
    );
}