import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Btcarousel from "../components/btcarousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Btcarousel />
  </Layout>
)

export default IndexPage
