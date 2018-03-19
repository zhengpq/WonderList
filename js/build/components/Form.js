"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormInput = require("./FormInput");

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Calender = require("./Calender");

var _Calender2 = _interopRequireDefault(_Calender);

var _Rating = require("./Rating");

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = {
            field: _this.props.field,
            remindTime: new Date().getFullYear() + "." + new Date().getMonth() + "." + new Date().getDate(),
            setTime: false
        };

        _this.setTime = _this.setTime.bind(_this);
        _this.saveTime = _this.saveTime.bind(_this);
        return _this;
    }
    //点击出现设置时间的界面


    _createClass(Form, [{
        key: "setTime",
        value: function setTime() {
            console.log(this.refs.rating);
            this.setState({
                setTime: true
            });
        }
        //保存时间

    }, {
        key: "saveTime",
        value: function saveTime(result) {
            this.setState({
                remindTime: result,
                setTime: false
            });
        }
    }, {
        key: "save",
        value: function save() {}
        // 展示日历

    }, {
        key: "showCalendar",
        value: function showCalendar() {
            if (this.state.setTime) {
                return _react2.default.createElement(_Calender2.default, { month: new Date().getMonth() + 1,
                    year: new Date().getFullYear(),
                    hour: new Date().getHours(),
                    minute: new Date().getMinutes(),
                    saveCalendar: this.saveTime });
            } else {
                return null;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var fields = this.state.field;
            if (this.props.readOnly) {
                var fieldChange = fields.map(function (item) {
                    if (item.type === "rating") {
                        return _react2.default.createElement(
                            "div",
                            { id: item.id, key: item.id },
                            _react2.default.createElement(
                                "label",
                                { htmlFor: item.id },
                                item.label,
                                ":"
                            ),
                            _react2.default.createElement(
                                "span",
                                { id: item.id },
                                _react2.default.createElement(_Rating2.default, { max: item.max, onRatingNumber: item.onRatingNumber, frozen: item.frozen })
                            )
                        );
                    } else {
                        return _react2.default.createElement(
                            "div",
                            { id: item.id, key: item.id },
                            _react2.default.createElement(
                                "label",
                                { htmlFor: item.id },
                                item.label,
                                ":"
                            ),
                            _react2.default.createElement(
                                "span",
                                { id: item.id },
                                item.defaultValue
                            )
                        );
                    }
                }, this);
                return _react2.default.createElement(
                    "div",
                    null,
                    fieldChange
                );
            } else {
                var _fieldChange = fields.map(function (item) {
                    if (item.type === "calendar") {
                        return _react2.default.createElement(
                            "div",
                            { id: item.id, key: item.id },
                            _react2.default.createElement(
                                "label",
                                { htmlFor: item.id },
                                item.label
                            ),
                            _react2.default.createElement(_FormInput2.default, { id: item.id,
                                value: this.state.remindTime,
                                type: item.type,
                                max: item.max
                            })
                        );
                    } else if (item.type === "rating") {
                        return _react2.default.createElement(
                            "div",
                            { id: item.id, key: item.id },
                            _react2.default.createElement(
                                "label",
                                { htmlFor: item.id },
                                item.label
                            ),
                            _react2.default.createElement(_FormInput2.default, { id: item.id,
                                defaultValue: item.defaultValue,
                                type: item.type,
                                max: item.max,
                                ref: "rating" })
                        );
                    } else {
                        return _react2.default.createElement(
                            "div",
                            { id: item.id, key: item.id },
                            _react2.default.createElement(
                                "label",
                                { htmlFor: item.id },
                                item.label
                            ),
                            _react2.default.createElement(_FormInput2.default, { id: item.id,
                                defaultValue: item.defaultValue,
                                type: item.type,
                                max: item.max })
                        );
                    }
                }, this);

                return _react2.default.createElement(
                    "div",
                    null,
                    _fieldChange,
                    _react2.default.createElement(_Button2.default, { id: "setTime", "class": "setTime", click: this.setTime, buttonContent: "SetTime" }),
                    this.showCalendar()
                );
            }
        }
    }]);

    return Form;
}(Component);

Form.PropType = {};
exports.default = Form;