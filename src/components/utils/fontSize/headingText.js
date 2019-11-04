import React from "react"
import PropTypes from "prop-types"
const HeadingText = ({ children, className }) => {
  return <div className={`display-3 font-weight-bold ${className}`}>{children}</div>
}
HeadingText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

export default HeadingText
