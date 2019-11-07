import React, { useRef, useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tagline from "../components/page-components/1-tagline"
import CurrentWork from "../components/page-components/2-currentWork"
import Blogs from "../components/page-components/3-blogs"
import Podcasts from "../components/page-components/4-podcasts"
import Projects from "../components/page-components/5-projects"
import Missed from "../components/page-components/6-missed"
import ConnectWithMe from "../components/page-components/7-connectWithMe"

/*global window*/
const IndexPage = () => {

  const refs = {
    blogRef: useRef(null),
    podcastsRef: useRef(null),
    currentWork: useRef(null),
    projectsRef: useRef(null),
    certsRef: useRef(null),
    contactRef: useRef(null),
  }
  useEffect(() => {
    window.onload = function() {
      window.setTimeout(() => {
        window.dispatchEvent(new Event("resize"))
      }, 400)
    }
  }, [])

  return (
    <Layout className="text-white" refs={refs}>
      <SEO title="Home" />
      <Tagline />
      <CurrentWork ref={refs.currentWork} />
      <Blogs ref={refs.blogRef} />
      <Podcasts ref={refs.podcastsRef} />
      <Projects ref={refs.projectsRef} />
      <Missed ref={refs.certsRef} />
      <ConnectWithMe ref={refs.contactRef} />
    </Layout>
  )
}

export default IndexPage
