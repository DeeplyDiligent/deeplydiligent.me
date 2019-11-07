import React, { useState } from "react"
import { MDBBtn, MDBWaves } from "mdbreact"
const NavButton = ({ className, children, href }) => {
  const [cursorPos, setCursorPos] = useState({})
  const handleClick = e => {
    console.log('buttonClicked',e)
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now(),
    }
    setCursorPos(cursorPos)
  }
  return (
    <a href={href} >
      <button
        type="button"
        style={{
          boxShadow: "0 0 0 0", 
          color: "white",
          fontSize:"14px",
          textTransform: "none",
        }}
        className={`btn waves-effect my-0 px-1 mx-0 py-2 ${className}`}
        onMouseUp={handleClick}
        onTouchStart={handleClick}
      >
        {children}
        <MDBWaves cursorPos={cursorPos} />
      </button>
    </a>
  )
}

export default NavButton
