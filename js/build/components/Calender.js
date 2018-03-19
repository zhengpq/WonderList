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

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _FormInput = require("./FormInput");

var _FormInput2 = _interopRequireDefault(_FormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var Calender = function (_Component) {
    _inherits(Calender, _Component);

    function Calender(props) {
        _classCallCheck(this, Calender);

        var _this = _possibleConstructorReturn(this, (Calender.__proto__ || Object.getPrototypeOf(Calender)).call(this, props));

        _this.LessMonth = _this.LessMonth.bind(_this);
        _this.AddMonth = _this.AddMonth.bind(_this);
        _this.state = {
            nowMonth: _this.props.month,
            nowYear: _this.props.year,
            nowHour: _this.props.hour,
            nowMinute: _this.props.minute,
            targetDate: 1,
            data: null
        };
        _this.change = _this.change.bind(_this);
        _this.save = _this.save.bind(_this);
        _this.chosenDate = _this.chosenDate.bind(_this);
        // this.less = this.less.bind(this);
        return _this;
    }

    //减少月份


    _createClass(Calender, [{
        key: "LessMonth",
        value: function LessMonth() {
            var nowMonth = this.state.nowMonth - 1;
            var nowYear = this.state.nowYear;
            if (nowMonth <= 0) {
                nowYear = nowYear - 1;
                nowMonth = 12;
            }
            this.setState({
                nowMonth: nowMonth,
                nowYear: nowYear
            });
        }
        //增加月份

    }, {
        key: "AddMonth",
        value: function AddMonth() {
            var nowMonth = this.state.nowMonth + 1;
            var nowYear = this.state.nowYear;
            if (nowMonth > 12) {
                nowYear = nowYear + 1;
                nowMonth = 1;
            }
            this.setState({
                nowMonth: nowMonth,
                nowYear: nowYear
            });
        }
        //改变小时和分钟

    }, {
        key: "change",
        value: function change(event) {
            var target = event.target;
            var value = parseInt(target.value);
            var valueAdd = value;
            if (target.getAttribute('id') === 'hour') {
                if (valueAdd > 24) {
                    this.setState({
                        nowHour: 0
                    });
                } else if (valueAdd < 0) {
                    this.setState({
                        nowHour: 24
                    });
                } else {
                    this.setState({
                        nowHour: valueAdd
                    });
                }
            } else if (target.getAttribute('id') === 'minute') {
                if (valueAdd > 60) {
                    this.setState({
                        nowMinute: 0
                    });
                } else if (valueAdd < 0) {
                    this.setState({
                        nowMinute: 60
                    });
                } else {
                    this.setState({
                        nowMinute: valueAdd
                    });
                }
            }
        }
        // 数据保存

    }, {
        key: "save",
        value: function save() {
            var yearMonth = this.state.nowYear + "." + this.state.nowMonth;
            console.log(yearMonth);
            var date = this.state.targetDate;
            var hour = this.state.nowHour;
            var mimute = this.state.nowMinute;
            var result = yearMonth + "." + date + " " + hour + ":" + mimute;
            console.log(result);
            this.props.saveCalendar(result);
        }
        //选中目标日期

    }, {
        key: "chosenDate",
        value: function chosenDate(e) {
            var target = e.target;
            var flag = target.getAttribute("flag");
            console.log(flag);
            this.setState({
                targetDate: flag
            });
        }
    }, {
        key: "render",
        value: function render() {
            var weeks = ["Mon", "Tus", "Wed", "Thur", "Fiv", "Sat", "Sun"];
            var dateFirst = this.state.nowYear + "." + this.state.nowMonth + "." + 1;
            var weekDay = new Date(dateFirst).getDay();
            var dayNumber = 0;
            var nowMonth = this.state.nowMonth;
            var nowYear = this.state.nowYear;
            //获取月份的天数
            if (nowMonth === 2) {
                if (nowYear % 4 === 0 || nowYear % 400 === 0) {
                    dayNumber = 29;
                } else {
                    dayNumber = 28;
                }
            } else if (nowMonth === 4 || nowMonth === 6 || nowMonth === 11) {
                dayNumber = 30;
            } else {
                dayNumber = 31;
            }

            //获取第一天的开始位置
            var beginning = 0;
            if (weekDay === 1) {
                beginning = 0;
            } else if (weekDay === 2) {
                beginning = 1;
            } else if (weekDay === 3) {
                beginning = 2;
            } else if (weekDay === 4) {
                beginning = 3;
            } else if (weekDay === 5) {
                beginning = 4;
            } else if (weekDay === 6) {
                beginning = 5;
            } else if (weekDay === 0) {
                beginning = 6;
            }

            // 日历主体
            var calendarBody = [];
            for (var i = 0; i < dayNumber + beginning; i++) {
                if (i >= beginning && i <= dayNumber + beginning) {
                    calendarBody.push(_react2.default.createElement(
                        "span",
                        { key: i, flag: i + 1 - beginning, onClick: this.chosenDate, className: i + 1 - beginning == this.state.targetDate ? "chosen" : "" },
                        i + 1 - beginning
                    ));
                } else {
                    calendarBody.push(_react2.default.createElement("span", { key: i, onClick: this.chosenDate }));
                }
            }

            return _react2.default.createElement(
                "div",
                { id: "calender" },
                _react2.default.createElement(
                    "div",
                    { className: "clenderHeader" },
                    _react2.default.createElement(_Button2.default, { flag: "monthLess", click: this.LessMonth, buttonContent: "<<" }),
                    _react2.default.createElement(
                        "span",
                        null,
                        this.state.nowYear + "." + this.state.nowMonth
                    ),
                    _react2.default.createElement(_Button2.default, { flag: "monthAdd", click: this.AddMonth, buttonContent: ">>" })
                ),
                _react2.default.createElement(
                    "div",
                    { id: "calendarWeek" },
                    weeks.map(function (item) {
                        return _react2.default.createElement(
                            "li",
                            { className: "week", key: item },
                            item
                        );
                    })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "calendarBody" },
                    calendarBody
                ),
                _react2.default.createElement(
                    "div",
                    { id: "time" },
                    _react2.default.createElement(_FormInput2.default, { id: "hour",
                        value: this.state.nowHour,
                        change: this.change,
                        type: "number"
                    }),
                    _react2.default.createElement(_FormInput2.default, { id: "minute",
                        value: this.state.nowMinute,
                        type: "number",
                        change: this.change
                    })
                ),
                _react2.default.createElement(_Button2.default, { click: this.save, id: "save", buttonContent: "Save", classs: "save" })
            );
        }
    }]);

    return Calender;
}(Component);

Calender.PropType = {};
exports.default = Calender;