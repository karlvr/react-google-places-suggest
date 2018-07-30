import PropTypes from "prop-types"
import React from "react"

const Prediction = ({item}) => {
  const {description, matched_substrings} = item
  const firstMatchedString =
    matched_substrings &&
    matched_substrings.length > 0 &&
    matched_substrings.shift()
  let labelParts = null

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

  return (
    <div className="react-google-places-suggest-prediction">
      {labelParts ? (
        <span>
          {labelParts.before}
          <span className="react-google-places-suggest-prediction-match">
            {labelParts.match}
          </span>
          {labelParts.after}
        </span>
      ) : (
        description
      )}
    </div>
  )
}

Prediction.propTypes = {
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

export default Prediction
