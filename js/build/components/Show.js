"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var Show = function (_Component) {
    _inherits(Show, _Component);

    function Show(props) {
        _classCallCheck(this, Show);

        var _this = _possibleConstructorReturn(this, (Show.__proto__ || Object.getPrototypeOf(Show)).call(this, props));

        _this.state = {
            field: _this.props.field,
            readOnly: _this.props.readOnly,
            show: _this.props.show
        };
        _this.save = _this.save.bind(_this);
        return _this;
    }

    // 编辑页面出现


    _createClass(Show, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.body.classList.remove("showOpen");
        }

        //点击保存后编辑页面隐藏

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            document.body.classList.add("showOpen");
        }
        //数据保存

    }, {
        key: "save",
        value: function save() {
            if (this.state.readOnly) {
                this.props.OK();
            } else {}
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.show) {
                return _react2.default.createElement(
                    "div",
                    { id: "Show" },
                    _react2.default.createElement(_Form2.default, { field: this.state.field, readOnly: this.state.readOnly }),
                    _react2.default.createElement(_Button2.default, { click: this.save, buttonContent: "OK" })
                );
            } else {
                return null;
            }
        }
    }]);

    return Show;
}(Component);

exports.default = Show;