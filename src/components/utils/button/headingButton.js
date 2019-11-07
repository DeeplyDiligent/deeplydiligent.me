import React from "react"
import Button from "./button"
const HeadingButton = ({ image, text, href }) => {
  return (
    <Button href={href}  className="bg-white text-body rounded-pill bg-white pr-5 pl-5 py-1 justify-content-center mx-4 mb-4 d-flex">
      <div>{image}</div><div>{text}</div>
    </Button>
  )
}

export default HeadingButton
