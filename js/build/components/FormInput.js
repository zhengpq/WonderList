"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Rating = require("./Rating");

var _Rating2 = _interopRequireDefault(_Rating);

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var FormInput = function (_Component) {
    _inherits(FormInput, _Component);

    function FormInput(props) {
        _classCallCheck(this, FormInput);

        return _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call(this, props));
    }

    _createClass(FormInput, [{
        key: "render",
        value: function render() {
            var common = {
                id: this.props.type,
                defaultValue: this.props.defaultValue,
                ref: "input"
            };
            switch (this.props.type) {
                case "content":
                    return _react2.default.createElement("input", _extends({}, common, { type: "text", onChange: this.props.change }));
                    break;
                case "remarks":
                    return _react2.default.createElement("input", _extends({}, common, { type: "textarea" }));
                    break;
                case "number":
                    return _react2.default.createElement("input", _extends({}, common, {
                        id: this.props.id,
                        value: this.props.value,
                        type: this.props.type,
                        onChange: this.props.change
                    }));
                case "rating":
                    return _react2.default.createElement(_Rating2.default, _extends({}, common, { max: this.props.max }));
                case "calendar":
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement("input", _extends({}, common, { type: "calendar", value: this.props.value }))
                    );
                default:
                    return _react2.default.createElement("input", _extends({}, common, { type: "text" }));

            }
        }
    }]);

    return FormInput;
}(Component);

FormInput.PropType = {
    type: _propTypes2.default.string
};

exports.default = FormInput;