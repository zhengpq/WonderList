"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require("./components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = require("./components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Rating = require("./components/Rating");

var _Rating2 = _interopRequireDefault(_Rating);

var _FormInput = require("./components/FormInput");

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Calender = require("./components/Calender");

var _Calender2 = _interopRequireDefault(_Calender);

var _Form = require("./components/Form");

var _Form2 = _interopRequireDefault(_Form);

var _Show = require("./components/Show");

var _Show2 = _interopRequireDefault(_Show);

var _Excel = require("./components/Excel");

var _Excel2 = _interopRequireDefault(_Excel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Logo"
        ),
        _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Button"
        ),
        _react2.default.createElement(_Button2.default, { buttonContent: "New Item", flag: "addKind", click: function click() {
                console.log("hello");
            } })
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Rating"
        ),
        _react2.default.createElement(_Rating2.default, { max: 5 })
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "FormInout"
        )
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Calendar"
        ),
        _react2.default.createElement(_Calender2.default, { month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes() })
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Form"
        ),
        _react2.default.createElement(_Form2.default, { field: [{ label: "Content", type: "text", id: "content", defaultValue: "Your Item" }, { label: "Remarks", type: "text", id: "remarks", defaultValue: "Details of your item" }, { label: "Priority", type: "rating", id: "rating", max: 6 }, { label: "Reminder Time", type: "calendar", id: "reminderTime", defaultValue: new Date().getFullYear() + "." + (new Date().getMonth() + 1) + "." + new Date().getDate() }] })
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Show"
        ),
        _react2.default.createElement(_Show2.default, { readOnly: true,
            field: [{ label: "Content", type: "text", id: "content", defaultValue: "Your Item" }, { label: "Remarks", type: "text", id: "remarks", defaultValue: "Details of your item" }, { label: "Priority", type: "rating", id: "rating", max: 5, onRatingNumber: 3 }, { label: "Reminder Time", type: "calendar", id: "reminderTime", defaultValue: "2017.12.14" }],
            show: true })
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Excel"
        ),
        _react2.default.createElement(_Excel2.default, null)
    )
), document.getElementById("Components"));