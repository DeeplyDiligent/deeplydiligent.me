import React, { useState, useEffect } from "react"
import SlantBackCard from "../utils/card/slantBackCard"
import Card from "../utils/card/card"
import { useStaticQuery, graphql } from "gatsby"
import TransluscentButton from "../utils/button/transluscentButton"
const Projects = React.forwardRef(({},ref) => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          projects {
            projectList {
              title
              description
              img
              dateLaunched
              link
              technologies
            }
            moreLink
          }
        }
      }
    }
  `)

  return (
    <SlantBackCard rightShort>
      <div className="container d-flex flex-column mx-auto" ref={ref}>
        <h1 className="offset-md-1 text-body my-5 pl-4  font-weight-bold">
          Check Out My Projects...
        </h1>
        <div className="row offset-md-1 col-md-10 mx-auto">
          {data.allDataJson.nodes[0].projects.projectList.map(project => (
            <Card
              image={
                <img className="custom-responsive-image" src={project.img} />
              }
              key={project.title}
              title={project.title}
              href={project.link}
              text={project.description}
              pills={project.technologies}
              footer={`Launched In ${project.dateLaunched}`}
              className=" col-md-6"
            />
          ))}
        </div>
        <div className="mb-5 mt-4 mx-auto">
          <TransluscentButton href={data.allDataJson.nodes[0].projects.moreLink}>
            <h6 className="font-weight-bold mb-0">See More...</h6>
          </TransluscentButton>
        </div>
      </div>
    </SlantBackCard>
  )
});

export default Projects
