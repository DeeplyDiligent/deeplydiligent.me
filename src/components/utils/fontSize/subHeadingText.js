import React from "react"
import PropTypes from "prop-types"
const SubHeadingText = ({ children, className}) => {
  return <h4 className={`${className}`}>{children}</h4>
}
SubHeadingText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SubHeadingText
