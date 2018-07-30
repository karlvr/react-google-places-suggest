"use strict"

exports.__esModule = true

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _Prediction = require("../Prediction")

var _Prediction2 = _interopRequireDefault(_Prediction)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

var ListItem = (function(_React$Component) {
  _inherits(ListItem, _React$Component)

  function ListItem() {
    _classCallCheck(this, ListItem)

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments)
    )
  }

  ListItem.prototype.renderDefault = function renderDefault(item) {
    var textNoResults = this.props.textNoResults

    return _react2.default.createElement(
      "div",
      {className: "react-google-places-suggest-list-item"},
      item
        ? _react2.default.createElement(_Prediction2.default, {item: item})
        : textNoResults
    )
  }

  ListItem.prototype.renderItem = function renderItem(item) {
    var customRender = this.props.customRender

    return customRender ? customRender(item) : this.renderDefault(item)
  }

  ListItem.prototype.render = function render() {
    var _props = this.props,
      active = _props.active,
      item = _props.item,
      onClick = _props.onClick

    return _react2.default.createElement(
      "div",
      {
        onClick:
          item &&
          function() {
            return onClick(item)
          },
        className:
          "react-google-places-suggest-list-item-container " +
          (item
            ? "react-google-places-suggest-list-item-container-clickable"
            : "") +
          " " +
          (active
            ? "react-google-places-suggest-list-item-container-active"
            : ""),
      },
      this.renderItem(item)
    )
  }

  return ListItem
})(_react2.default.Component)

ListItem.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        active: _propTypes2.default.bool,
        onClick: _propTypes2.default.func,
        item: _propTypes2.default.shape({
          description: _propTypes2.default.string,
          matched_substrings: _propTypes2.default.arrayOf(
            _propTypes2.default.shape({
              length: _propTypes2.default.number.isRequired,
              offset: _propTypes2.default.number.isRequired,
            })
          ),
        }),
        customRender: _propTypes2.default.func,
        textNoResults: _propTypes2.default.string,
      }
    : {}

ListItem.defaultProps = {
  active: false,
}

exports.default = ListItem
module.exports = exports["default"]
