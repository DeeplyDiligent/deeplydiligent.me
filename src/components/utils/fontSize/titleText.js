import React from "react"
import PropTypes from "prop-types"
const TitleText = ({ children, className }) => {
  return <h2 className={`font-weight-bold ${className}`}>{children}</h2>
}
TitleText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

export default TitleText
