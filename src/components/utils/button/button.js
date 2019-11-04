import React from "react"
const Button = ({ className, children, style = {}, href }) => {
  return (
    <a style={style} href={href} className={`bg-white text-body ${className}`}>
      {children}
    </a>
  )
}

export default Button
