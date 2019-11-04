import React, { useState, useEffect } from "react"
import SlantBackCard from "../utils/card/slantBackCard"
import Card from "../utils/card/card"
import { useStaticQuery, graphql } from "gatsby"
import TransluscentButton from "../utils/button/transluscentButton"
const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          blog {
            mediumRssLink
          }
        }
      }
    }
  `)
  const [rssData, setRssData] = useState([])
  useEffect(() => {
    fetch(data.allDataJson.nodes[0].blog.mediumRssLink)
      .then(x => x.json())
      .then(rssData => {
        if (rssData.status === "ok") {
          setRssData(rssData.items.slice(0, 4))
        }
      })
  }, [])

  return (
    <SlantBackCard>
      <div className="container d-flex flex-column mx-auto">
        <h1 className="offset-md-1 text-body my-5 pl-4  font-weight-bold">
          I Write Blogs...
        </h1>
        <div className="row offset-md-1 col-md-10 mx-auto">
          {rssData.length ? (
            rssData.map(post => {
              let htmlTagSearch = /(<([^>]+)>)/gi
              post.content = post.content.replace(htmlTagSearch, " ")
              return (
                <Card
                  key={post.title}
                  title={post.title}
                  href={post.link}
                  text={post.content}
                  footer={post.pubDate}
                  className=" col-md-6"
                />
              )
            })
          ) : (
            <h3 className="mx-auto text-body">Loading...</h3>
          )}
        </div>
        <div className="mb-5 mt-4 mx-auto">
          <TransluscentButton>
            <h6 className="font-weight-bold mb-0">Read More...</h6>
          </TransluscentButton>
        </div>
      </div>
    </SlantBackCard>
  )
}

export default Blogs
