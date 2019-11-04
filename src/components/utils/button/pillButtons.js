import React, { useState } from "react"
import PillButton from "./pillButton"
const PillButtons = ({ pills }) => {
  const [whiteVisible, setWhiteVisible] = useState(true)
  const onScroll = e => {
    let scrollPercent =
      (100 * e.target.scrollLeft) /
      (e.target.scrollWidth - e.target.clientWidth)
    setWhiteVisible(!(scrollPercent > 5))
  }
  return (
    <>
      <div
        className="d-flex no-scrollbars"
        onScroll={onScroll}
        style={{ overflowX: "visible", overflowY: "auto", marginRight: "10px" }}
      >
        <div className={`fade-to-white ${whiteVisible ? "" : "hide"}`}></div>
        {pills.map((pill,i) => (
          <PillButton key={pill} text={pill} className={i===0?"ml-0":""}></PillButton>
        ))}
      </div>
      <div className="d-flex align-items-center">
        <i className="fas fa-chevron-right"></i>
      </div>
    </>
  )
}

export default PillButtons
