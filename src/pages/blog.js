import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blog from "../components/blog"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <Blog />
  </Layout>
)

export default BlogPage
