var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  font-weight: bold;\n"],
  ["\n  font-weight: bold;\n"]
)

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

var Match = styled.span(_templateObject)

var Prediction = function Prediction(_ref) {
  var item = _ref.item
  var description = item.description,
    matched_substrings = item.matched_substrings

  var firstMatchedString =
    matched_substrings &&
    matched_substrings.length > 0 &&
    matched_substrings.shift()
  var labelParts = null

  if (firstMatchedString) {
    labelParts = {
      before: description.substr(0, firstMatchedString.offset),
      match: description.substr(
        firstMatchedString.offset,
        firstMatchedString.length
      ),
      after: description.substr(
        firstMatchedString.offset + firstMatchedString.length
      ),
    }
  }

  return React.createElement(
    "div",
    {className: "react-google-places-suggest-prediction"},
    labelParts
      ? React.createElement(
          "span",
          null,
          labelParts.before,
          React.createElement(Match, null, labelParts.match),
          labelParts.after
        )
      : description
  )
}

Prediction.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        item: PropTypes.shape({
          description: PropTypes.string,
          matched_substrings: PropTypes.arrayOf(
            PropTypes.shape({
              length: PropTypes.number.isRequired,
              offset: PropTypes.number.isRequired,
            })
          ),
        }).isRequired,
      }
    : {}

export default Prediction
