import PropTypes from "prop-types"
import React from "react"

import ListItem from "../ListItem"

class List extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  renderDefault() {
    const {
      customRender,
      items,
      activeItemIndex,
      onSelect,
      textNoResults,
    } = this.props

    if (items.length > 0) {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className="react-google-places-suggest-list"
        >
          {items.map((item, index) => (
            <ListItem
              key={index}
              active={activeItemIndex === index}
              customRender={customRender}
              onClick={item => onSelect(item)}
              item={item}
            />
          ))}
        </div>
      )
    }

    if (textNoResults || customRender) {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className="react-google-places-suggest-list"
        >
          <ListItem customRender={customRender} textNoResults={textNoResults} />
        </div>
      )
    }

    return null
  }

  handleMouseEnter() {
    const {onFocusChange} = this.props
    if (onFocusChange) {
      onFocusChange(true)
    }
  }

  handleMouseLeave() {
    const {onFocusChange} = this.props
    if (onFocusChange) {
      onFocusChange(false)
    }
  }

  render() {
    const {customContainerRender, items} = this.props
    return customContainerRender
      ? customContainerRender(items)
      : this.renderDefault(items)
  }
}

List.propTypes = {
  activeItemIndex: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      matched_substrings: PropTypes.arrayOf(
        PropTypes.shape({
          length: PropTypes.number.isRequired,
          offset: PropTypes.number.isRequired,
        })
      ),
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(ListItem)),
    PropTypes.instanceOf(ListItem),
  ]),
  onSelect: PropTypes.func,
  onFocusChange: PropTypes.func,
  customContainerRender: PropTypes.func,
  customRender: PropTypes.func,
  textNoResults: PropTypes.string,
}

List.defaultProps = {
  items: [],
}

export default List
