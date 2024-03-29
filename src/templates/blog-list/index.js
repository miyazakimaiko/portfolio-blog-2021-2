import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Blogpagetopics from './blogpagetopics'
import './blog.css'
import './articles.css'

import ImgTrain from '../../images/chairs-in-the-platform.jpg';

const BlogListTemplate = ({data, pageContext}) => {
    return (
        <Layout>
            <SEO 
                title="blog written by Maiko Miyazaki" 
                description="What I learned from apprenticeship program, personal projects and books">
            </SEO>

            <div className="inner-screen-container">
                <section className="article-header" style={{
                    backgroundImage: `linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.3), 
                        rgba(0, 0, 0, 0.3)), url(${ImgTrain})`}}
                >
                    <h1 className="page-title">
                        <span>What I learned from apprenticeship program,</span>
                        <span>personal projects and books</span>
                    </h1>
                </section>

                <div className="article-container">
                    <Blogpagetopics />
                    <article>
                        <div className="article-contents">
                        {data.allMarkdownRemark.edges.map(edge => {

                            const image = getImage(edge.node.frontmatter.featuredImage)

                            return(
                            <div className="single-unit-post">
                                <p className="meta-tertiary">
                                    <time className="date-published">{edge.node.frontmatter.date}</time>
                                    <time className="date-updated">{edge.node.frontmatter.updatedAt}</time>
                                </p>
                                <h2 className="headline">
                                <Link to={`/blog/${edge.node.frontmatter.slug}/`}>{edge.node.frontmatter.title}</Link>
                                </h2>
                                <p className="categories">
                                {edge.node.frontmatter.topics.map(topic => (
                                    <Link to={`/${topic.slug}/`}>{topic.name}</Link>
                                ))}
                                </p>
                                <div className="thumbnail">
                                    <Link 
                                        to={`/blog/${edge.node.frontmatter.slug}/`} 
                                        className="thumbnail-image">
                                        <GatsbyImage
                                            image={image}
                                            className="thumbnail"
                                            objectFit="cover"
                                            objectPosition="50% 50%"
                                            alt="" />
                                    </Link>
                                </div>
                            </div>
                            )
                            
                        })}

                            <div className="pagers">
                                <div 
                                    className={`pager ${pageContext.currentPage===1 ? "hidden" : "to-prev-page"}`}>
                                    <Link 
                                        to={`/blog/${ (pageContext.currentPage === 2) ? ""
                                                     : pageContext.currentPage - 1
                                            }`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="currentColor" 
                                            className="bi bi-chevron-left icon" 
                                            viewBox="0 0 16 16">
                                        <path 
                                            fill-rule="evenodd" 
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                        Prev Page
                                    </Link>
                                </div>
                                <div 
                                    className={`pager ${pageContext.currentPage===pageContext.numPages ? "hidden" : "to-next-page"}`}>
                                    <Link 
                                        to={`/blog/${pageContext.currentPage + 1}`}>
                                        Next Page
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right icon" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div> 
            </div>
        </Layout>
    );
}

export default BlogListTemplate

export const query = graphql`query BlogListTemplate($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          topics {
            name
            slug
          }
          date(formatString: "DD MMMM 'YY")
          updatedAt(formatString: "DD MMMM 'YY")
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`