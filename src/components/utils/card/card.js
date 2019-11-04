import React from "react"
import Truncate from "react-truncate"
import PillButton from "../button/pillButton"
import HeadingButton from "../button/headingButton"
import PillButtons from "../button/pillButtons"
const Card = ({
  title,
  text,
  href,
  image,
  footer = "",
  className,
  subTitle,
  pills = [],
}) => {
  return (
    <div className={` ${className}`}>
      <a
        href={href}
        className={`card mb-3 bg-white custom-border-radius border border-0`}
      >
        <div className="row no-gutters">
          {image ? (
            <div className="col-md-4 mx-auto py-4 pl-4 d-flex justify-content-center align-items-center">
              {image}
            </div>
          ) : (
            false
          )}
          <div className={image ? "col-md-8" : "col-12"}>
            <div className="card-body p-4">
              <h4 className="card-title text-body font-weight-bold mb-1">
                {title}
              </h4>
              <h6 className="card-title text-body">{subTitle}</h6>
              <div className="card-text">
                <Truncate lines={3} ellipsis={<span>...</span>}>
                  {text}
                </Truncate>
              </div>
              <p className="card-text mb-0">
                <small className="text-muted">{footer}</small>
              </p>

              {pills && pills[0] ? (
                <div class="d-flex overflow-auto mt-3 ">
                  <PillButtons pills={pills} />
                </div>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card
