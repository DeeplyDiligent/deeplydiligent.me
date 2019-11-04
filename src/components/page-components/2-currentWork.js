import React from "react"
import HeadingText from "../utils/fontSize/headingText"
import LinkedinLogoImg from "../../images/linkedin.svg"
import TitleText from "../utils/fontSize/titleText"
import Card from "../utils/card/card"
import { useStaticQuery, graphql } from "gatsby"
import TransluscentButton from "../utils/button/transluscentButton"
const CurrentWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          workExperience {
            cards {
              body
              subTitle
              title
            }
          }
        }
      }
    }
  `)
  return (
    <div className="m-auto py-5 container">
      <TitleText className="row d-flex justify-content-center mb-4">
        Currently, I work as a...
      </TitleText>
      <div className="row">
        {data.allDataJson.nodes[0].workExperience.cards.map((work, index) => (
          <Card
            className={(index === 0 ? "offset-md-1" : "") + " col-md-5"}
            title={work.title}
            subTitle={work.subTitle}
            text={work.body}
          />
        ))}
      </div>
      <div className="mx-auto d-table">
        <TransluscentButton>
          <h6
            style={{ textTransform: "none" }}
            className="font-weight-bold mb-0"
          >
            Learn More...
          </h6>
        </TransluscentButton>
      </div>
    </div>
  )
}

export default CurrentWork
