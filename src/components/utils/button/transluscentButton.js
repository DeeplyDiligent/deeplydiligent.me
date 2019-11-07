import React, { useState } from "react"
import { MDBBtn, MDBWaves } from "mdbreact"
const TransluscentButton = ({ className, children, href }) => {
  const [cursorPos, setCursorPos] = useState({})
  const handleClick = e => {
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now(),
    }
    setCursorPos(cursorPos)
  }
  return (
    <a href={href}>
      <button
        type="button"
        style={{
          boxShadow: "0 0 0 0",
          backgroundColor: "#9a9a9a",
          color: "white",
          textTransform: "none",
        }}
        className={`btn waves-effect custom-border-radius ${className}`}
        onMouseUp={handleClick}
        onTouchStart={handleClick}
      >
        {children}
        <MDBWaves cursorPos={cursorPos} />
      </button>
    </a>
  )
}

export default TransluscentButton
