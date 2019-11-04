import React from "react"
import Photo from "../utils/images/facePhoto"
import HeadingText from "../utils/fontSize/headingText"
import { useStaticQuery, graphql } from "gatsby"
import SubHeadingText from "../utils/fontSize/subHeadingText"
import HeadingButton from "../utils/button/headingButton"
import HeadingImage from "../utils/images/headingImage"
import LinkedinLogoImg from "../../images/linkedin.svg"
import ResumeImg from "../../images/resume.svg"
const Tagline = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allDataJson {
        nodes {
          heading {
            heading_1
            heading_2
            headingButtons {
              link
              name
            }
          }
        }
      }
    }
  `)
  return (
    <div style={{maxWidth:960, margin:"auto"}}>
      <div className="row mr-auto ml-auto justify-content-center mt-5">
        <Photo
          classNameParent="col-sm-3 col-6"
          className="rounded-circle"
          path="face.jpg"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          alt="face"
        />
        <div className="col-sm-6 col-12 d-flex flex-column justify-content-center">
          <HeadingText>
            {data.allDataJson.nodes[0].heading.heading_1}
          </HeadingText>
          <SubHeadingText>
            {data.allDataJson.nodes[0].heading.heading_2}
          </SubHeadingText>
        </div>
      </div>
      <div className="d-flex justify-content-center text-dark mt-4 py-3">
        <HeadingButton
          href={data.allDataJson.nodes[0].heading.headingButtons[0].link}
          text={data.allDataJson.nodes[0].heading.headingButtons[0].name}
          image={<HeadingImage width="47px" image={<LinkedinLogoImg />} />}
        />
        <div style={{ width: "42px" }}></div>
        <HeadingButton
          href={data.allDataJson.nodes[0].heading.headingButtons[1].link}
          text={data.allDataJson.nodes[0].heading.headingButtons[1].name}
          image={<HeadingImage width="38px" image={<ResumeImg />} />}
        />
      </div>
    </div>
  )
}

export default Tagline
