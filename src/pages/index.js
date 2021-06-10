import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home"
import Helmet from 'react-helmet';
import Header from '../components/header'
import Nav from '../components/nav'


const IndexPage = () => (
      <>
      <Seo title="Home" />
      <Helmet>
      <body class="header-logo-hidden" />
      </Helmet>
      <Header />
      <Nav />
      <main className="home"><Home /></main>
  </>
)

export default IndexPage
