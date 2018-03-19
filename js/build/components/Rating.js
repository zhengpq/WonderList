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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var Rating = function (_Component) {
    _inherits(Rating, _Component);

    function Rating(props) {
        _classCallCheck(this, Rating);

        var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

        _this.state = {
            staronRatingNumber: _this.props.onRatingNumber,
            frozen: _this.props.frozen

        };
        return _this;
    }

    //get the number of the rating stars8


    _createClass(Rating, [{
        key: "getValue",
        value: function getValue() {
            var onRatingNumber = this.state.staronRatingNumber;
            return onRatingNumber;
        }

        //chang the star state;

    }, {
        key: "onRating",
        value: function onRating(event) {
            var targetFlag = parseInt(event.target.getAttribute("flag"));
            console.log(targetFlag);
            this.setState({
                staronRatingNumber: targetFlag
            });
        }
    }, {
        key: "render",
        value: function render() {
            var stars = [];
            var starNumber = this.props.max;
            for (var i = 0; i < starNumber; i++) {
                if (this.state.frozen) {
                    stars.push(_react2.default.createElement(
                        "span",
                        { key: i,
                            flag: i,
                            className: (0, _classnames2.default)("Rating", i <= this.state.staronRatingNumber ? "onRating" : null)
                        },
                        "\u2606"
                    ));
                } else {
                    stars.push(_react2.default.createElement(
                        "span",
                        { key: i,
                            onClick: this.onRating.bind(this),
                            flag: i,
                            className: (0, _classnames2.default)("Rating", i <= this.state.staronRatingNumber ? "onRating" : null)
                        },
                        "\u2606"
                    ));
                }
            }
            return _react2.default.createElement(
                "div",
                { id: "Rating" },
                stars
            );
        }
    }]);

    return Rating;
}(Component);

Rating.PropType = {
    max: _propTypes2.default.number
};
_propTypes2.default.defaultValue = {
    max: 6
};

exports.default = Rating;