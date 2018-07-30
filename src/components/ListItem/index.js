import PropTypes from "prop-types"
import React from "react"

import Prediction from "../Prediction"

class ListItem extends React.Component {
  renderDefault(item) {
    const {textNoResults} = this.props
    return (
      <div className="react-google-places-suggest-list-item">
        {item ? <Prediction item={item} /> : textNoResults}
      </div>
    )
  }

  renderItem(item) {
    const {customRender} = this.props
    return customRender ? customRender(item) : this.renderDefault(item)
  }

  render() {
    const {active, item, onClick} = this.props
    return (
      <div
        onClick={item && (() => onClick(item))}
        className={`react-google-places-suggest-list-item-container ${
          item
            ? "react-google-places-suggest-list-item-container-clickable"
            : ""
        } ${
          active ? "react-google-places-suggest-list-item-container-active" : ""
        }`}
      >
        {this.renderItem(item)}
      </div>
    )
  }
}

ListItem.propTypes = {
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

ListItem.defaultProps = {
  active: false,
}

export default ListItem
