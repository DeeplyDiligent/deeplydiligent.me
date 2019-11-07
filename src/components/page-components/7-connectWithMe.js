import React, { useState, useEffect } from "react"
import SlantBackCard from "../utils/card/slantBackCard"
import Card from "../utils/card/card"
import { useStaticQuery, graphql } from "gatsby"
import Convert from "xml-js"
import TransluscentButton from "../utils/button/transluscentButton"
import LinkedinLogoImg from "../../images/linkedin.svg"
import MessengerLogoImg from "../../images/messenger.svg"
const ConnectWithMe = React.forwardRef(({}, ref) => {
  return (
    <div className="container mx-auto mt-5 px-0" ref={ref}>
      <div
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        className="w-100 bg-white text-body justify-content-center custom-border-radius pb-4 pt-5"
      >
        <h4 className="pb-3 font-weight-bold mx-auto text-center">
          Connect With Me Today!
        </h4>
        <div className="d-flex justify-content-center custom-padding-footer flex-wrap">
          <div className="d-flex py-3">
            <MessengerLogoImg style={{ width: "50px" }} />
            <div className="mx-4">
              <div><b>Say Hi!</b></div>
              <div>m.me/deeplydiligent</div>
            </div>
          </div>

          <div className="d-flex py-3">
            <LinkedinLogoImg style={{ width: "50px" }} />
            <div className="mx-4">
              <div><b>Connect With Me</b></div>
              <div>linkedin.com/in/deeplydiligent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default ConnectWithMe
