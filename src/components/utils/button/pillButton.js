import React from "react"
const PillButton = ({ children, href, text="", className}) => {
  return (
    <button
      style={{whiteSpace:"nowrap"}}
      type="button"
      className={`btn rounded-pill p-2 shadow-none pill-button ${className}`}
      data-toggle="button"
      aria-pressed="false"
      autocomplete="off"
    >
      {text}
    </button>
  )
}

export default PillButton
