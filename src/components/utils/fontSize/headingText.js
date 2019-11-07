import React from "react"
import PropTypes from "prop-types"
const HeadingText = ({ children, className }) => {
  return <div className={`display-3 font-weight-bold mb-2 center-mobile ${className}`}>{children}</div>
}
HeadingText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

export default HeadingText
