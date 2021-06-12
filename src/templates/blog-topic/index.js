import * as React from "react"
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Blogpagetopics from './blogpagetopics'
import './blog.css'
import './articles.css';

import ImgTrain from '../../images/chairs-in-the-platform.jpg';

const BlogTopicTemplate = (props) => {
    const posts = props.data.allMarkdownRemark.edges

    return (
        <Layout>
        <SEO 
            title={props.pageContext.topicName} 
            description={`Blog related to ${props.pageContext.topicName} written by Maiko Miyazaki.`}>
        </SEO>
        <div className="inner-screen-container">
            <section className="article-header" style={{
                backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.3), 
                    rgba(0, 0, 0, 0.3)), url(${ImgTrain})`}}
            >
                <h1 className="page-title">
                    Blog: {props.pageContext.topicName}
                </h1>
            </section>

            <div className="article-container">
                <Blogpagetopics topicName={props.pageContext.topicName}/>
                <article>
                <div className="article-contents">
                {posts.map(edge => (
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
                            <Link to={`/${edge.node.frontmatter.slug}/`} className="thumbnail-image" style={{backgroundImage: `url(${edge.node.featuredImage})`}}></Link>
                        </div>
                    </div>
                ))}

                    <div className="pagers">
                        <div className="to-prev-page pager"><a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-left icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Prev Page
                            </a>
                        </div>
                        <div className="to-next-page pager"><a href="">
                            Next Page
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg></a>
                        </div>
                    </div>
                </div>
            </article>
            </div> 
        </div>
        </Layout>
    )
}

export default BlogTopicTemplate

export const query = graphql`
    query BlogTopicTemplate($slug: String!) {
        site {
            siteMetadata {
              title
              author
            }
        }
        allMarkdownRemark (
            filter: {
                frontmatter: {
                    topics: {
                        elemMatch: {
                            slug: {eq: $slug}
                        }
                    }
                }
            }
        ) 
        {
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
                        featuredImage
                    }
                }
            }
        }
    }
`