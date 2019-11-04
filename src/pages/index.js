import React from "react"
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

const IndexPage = () => (
  <Layout className="text-white">
    <SEO title="Home" />
    <Tagline/>
    <CurrentWork />
    <Blogs />
    <Podcasts />
    <Projects />
    <Missed />
    <ConnectWithMe/>
  </Layout>
)

export default IndexPage
