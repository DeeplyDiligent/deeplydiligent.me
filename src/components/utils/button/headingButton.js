import React from "react"
import Button from "./button"
const HeadingButton = ({ image, text, href }) => {
  return (
    <Button href={href}  className="rounded-pill bg-white pr-5 pl-5 py-1 justify-content-center d-flex">
      <div>{image}</div><div>{text}</div>
    </Button>
  )
}

export default HeadingButton
