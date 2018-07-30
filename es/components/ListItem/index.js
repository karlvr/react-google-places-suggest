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

import PropTypes from "prop-types"
import React from "react"

import Prediction from "../Prediction"

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

    return React.createElement(
      "div",
      {className: "react-google-places-suggest-list-item"},
      item ? React.createElement(Prediction, {item: item}) : textNoResults
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

    return React.createElement(
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
})(React.Component)

ListItem.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        active: PropTypes.bool,
        onClick: PropTypes.func,
        item: PropTypes.shape({
          description: PropTypes.string,
          matched_substrings: PropTypes.arrayOf(
            PropTypes.shape({
              length: PropTypes.number.isRequired,
              offset: PropTypes.number.isRequired,
            })
          ),
        }),
        customRender: PropTypes.func,
        textNoResults: PropTypes.string,
      }
    : {}

ListItem.defaultProps = {
  active: false,
}

export default ListItem
