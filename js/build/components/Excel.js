"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Rating = require("./Rating");

var _Rating2 = _interopRequireDefault(_Rating);

var _Show = require("./Show");

var _Show2 = _interopRequireDefault(_Show);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var Excel = function (_Component) {
    _inherits(Excel, _Component);

    function Excel(props) {
        _classCallCheck(this, Excel);

        var _this = _possibleConstructorReturn(this, (Excel.__proto__ || Object.getPrototypeOf(Excel)).call(this, props));

        _this.state = {
            data: [["item1", "write something", 1, "2017.12.01"]],
            show: false,
            readOnly: false,
            trNumber: false,
            showField: null
        };
        _this.action = _this.action.bind(_this);
        return _this;
    }

    // 编辑页面出现


    _createClass(Excel, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.body.classList.remove("showOpen");
            console.log(this.state);
        }

        //点击保存后编辑页面隐藏

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            document.body.classList.add("showOpen");
            console.log(this.state);
        }

        //展示编辑页面

    }, {
        key: "showShow",
        value: function showShow() {
            if (this.state.show) {
                return _react2.default.createElement(_Show2.default, { show: this.state.show, readOnly: this.state.readOnly, field: this.state.showField });
            } else {
                return null;
            }
        }

        //获取数据并且进行数据修改

    }, {
        key: "translateData",
        value: function translateData(trNumber) {
            var showData = this.state.data[trNumber];
            console.log(showData);
            var translated = [{ label: "Content", type: "text", id: "content", defaultValue: showData[0] }, { label: "Remarks", type: "text", id: "remarks", defaultValue: showData[1] }, { label: "Priority", type: "rating", id: "rating", max: 5, onRatingNumber: showData[2] }, { label: "Reminder Time", type: "calendar", id: "reminderTime", defaultValue: showData[3] }];
            return translated;
        }
        // 编辑

    }, {
        key: "edite",
        value: function edite(event) {
            console.log("edite");
            var trNumber = parseInt(event.target.getAttribute("number"));
            var showField = this.translateData(trNumber);
            console.log(showField);
            this.setState({
                show: true,
                readOnly: false,
                trNumber: trNumber,
                showField: showField
            });
            console.log(this.state);
        }

        //查看

    }, {
        key: "read",
        value: function read(event) {
            console.log("read");
            var trNumber = parseInt(event.target.getAttribute("number"));
            var showField = this.translateData(trNumber);
            console.log(showField);
            this.setState({
                show: true,
                readOnly: true,
                trNumber: trNumber,
                showField: showField
            });
            console.log(this.state);
        }

        // 删除

    }, {
        key: "deleteData",
        value: function deleteData(event) {
            console.log("delete");
            var trNumber = parseInt(event.target.getAttribute("number"));
            var dataLeft = this.state.data.splice(trNumber, 1);
            console.log(dataLeft);
            this.setState({
                data: this.state.data.splice(trNumber, 1),
                show: false,
                readOnly: false
            });
            console.log(this.state);
        }

        //Action

    }, {
        key: "action",
        value: function action(event) {
            this.setState({
                show: false,
                readOnly: true
            });
            console.log(event);
            console.log(event.target);
            switch (event.target.getAttribute("id")) {
                case "edit":
                    this.edite(event);
                    console.log(this.state);
                    break;
                case "read":
                    this.read(event);
                    console.log(this.state);
                    break;
                case "delete":
                    this.deleteData(event);
                    console.log(this.state);
                    break;
                default:
                    return;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var headers = ["Content", "Remarks", "Priority", "Reminder Time", "Action"];
            var Header = headers.map(function (item, index) {
                return _react2.default.createElement(
                    "th",
                    { key: index },
                    item
                );
            });

            var tbody = this.state.data.map(function (item, index) {
                return _react2.default.createElement(
                    "tr",
                    { key: index },
                    item.map(function (element, index) {
                        if (index === 2) {
                            return _react2.default.createElement(
                                "td",
                                { key: index },
                                _react2.default.createElement(_Rating2.default, { max: 5, onRatingNumber: 3, frozen: true })
                            );
                        } else {
                            return _react2.default.createElement(
                                "td",
                                { key: index },
                                element
                            );
                        }
                    }, this),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "span",
                                { flag: "read", id: "read", number: index, onClick: this.action },
                                "\u2139"
                            ),
                            _react2.default.createElement(
                                "span",
                                { flag: "edit", id: "edit", number: index, onClick: this.action },
                                "\u2710"
                            ),
                            _react2.default.createElement(
                                "span",
                                { flag: "delete", id: "delete", number: index, onClick: this.action },
                                "X"
                            )
                        )
                    )
                );
            }, this);

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "table",
                    null,
                    _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            Header
                        )
                    ),
                    _react2.default.createElement(
                        "tbody",
                        null,
                        tbody
                    )
                ),
                this.showShow()
            );
        }
    }]);

    return Excel;
}(Component);

Excel.PropTypes = {};

exports.default = Excel;