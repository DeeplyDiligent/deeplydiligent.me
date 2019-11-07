import React from "react"
import SlantBack from "../../../images/slantBack.svg"
const SlantBackCard = ({ children, rightShort = false }) => {
  const { leftShortTransform, rightShortTransform, ref} = {
    leftShortTransform: ["", "scaleY(-1)"],
    rightShortTransform: ["scaleX(-1)", "scaleY(-1) scaleX(-1)"],
  }
  const transform = rightShort ? rightShortTransform : leftShortTransform
  return (
    <div>
      <div style={{ transform: transform[0], marginBottom: -2 }}>
        <SlantBack />
      </div>
      <div style={{background:"#E9E9E9"}}>{children}</div>
      <div style={{ transform:transform[1], marginTop: -1 }}>
        <SlantBack />
      </div>
    </div>
  )
}

export default SlantBackCard
