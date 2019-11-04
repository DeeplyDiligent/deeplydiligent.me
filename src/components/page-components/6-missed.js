import React, { useState, useEffect } from "react"
import SlantBackCard from "../utils/card/slantBackCard"
import Card from "../utils/card/card"
import { useStaticQuery, graphql } from "gatsby"
import Convert from "xml-js"
import TransluscentButton from "../utils/button/transluscentButton"
const Missed = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          certifications {
            certList {
              name
              description
              dates
              image
              verificationLink
            }
          }
          competitions{
            competitionList{
              name
              description
              image
              dates
              link
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container d-flex flex-column mx-auto">
      <h1 className="offset-md-1 mt-5 mb-4 pl-4 pt-5 font-weight-bold">
        What I've Missed...
      </h1>
      <h3 className="offset-md-1 pl-4 font-weight-bold my-4">Certifications</h3>
      <div className="row offset-md-1 col-md-10 mx-auto">
        {data.allDataJson.nodes[0].certifications.certList.map(cert => (
          <Card
            image={<img className="custom-responsive-image" src={cert.image} />}
            key={cert.name}
            title={cert.name}
            href={cert.verificationLink}
            text={cert.description}
            footer={cert.dates}
            className="col-md-6"
          />
        ))}
      </div>

      <h3 className="offset-md-1 pl-4 mt-5 mb-4 font-weight-bold">Competitions</h3>
      <div className="row offset-md-1 col-md-10 mx-auto">
        {data.allDataJson.nodes[0].competitions.competitionList.map(cert => (
          <Card
            image={<img className="custom-responsive-image" src={cert.image} />}
            key={cert.name}
            title={cert.name}
            href={cert.verificationLink}
            text={cert.description}
            footer={cert.dates}
            className="col-md-6"
          />
        ))}
      </div>
      <div className="row offset-md-1 col-md-10 mx-auto"></div>
    </div>
  )
}

export default Missed
