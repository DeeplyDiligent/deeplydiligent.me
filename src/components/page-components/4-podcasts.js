import React, { useState, useEffect } from "react"
import SlantBackCard from "../utils/card/slantBackCard"
import Card from "../utils/card/card"
import { useStaticQuery, graphql } from "gatsby"
import Convert from "xml-js"
import TransluscentButton from "../utils/button/transluscentButton"
const Podcasts = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          podcast {
            anchorRssLink
          }
        }
      }
    }
  `)
  const [rssData, setRssData] = useState([])
  useEffect(() => {
    fetch(data.allDataJson.nodes[0].podcast.anchorRssLink)
      .then(rssData => rssData.text())
      .then(text => {
        let data = Convert.xml2js(text).elements[0].elements[0].elements
        data = data.filter(item => item.name === "item")
        data = data.map(podcast => ({
          title: podcast.elements.find(x => x.name === "title").elements[0]
            .cdata,
          description: podcast.elements.find(x => x.name === "description")
            .elements[0].cdata,
          link: podcast.elements.find(x => x.name === "link").elements[0].text,
          pubDate: podcast.elements.find(x => x.name === "pubDate").elements[0].text,
        }))

        setRssData(data.slice(0, 4))
      })
  }, [])

  return (
    <div className="container d-flex flex-column mx-auto">
      <h1 className="offset-md-1 my-5 pl-4  font-weight-bold">
        I Make Podcasts...
      </h1>
      <div className="row offset-md-1 col-md-10 mx-auto">
        {rssData.length ? (
          rssData.map(episode => {
            return (
              <Card
                key={episode.title}
                title={episode.title}
                href={episode.link}
                text={episode.description}
                footer={episode.pubDate}
                className=" col-md-6"
              />
            )
          })
        ) : (
          <h3 className="mx-auto ">Loading...</h3>
        )}
      </div>
      <div className="mb-5 mt-4 mx-auto">
        <TransluscentButton>
          <h6 className="font-weight-bold mb-0">Hear More...</h6>
        </TransluscentButton>
      </div>
    </div>
  )
}

export default Podcasts
