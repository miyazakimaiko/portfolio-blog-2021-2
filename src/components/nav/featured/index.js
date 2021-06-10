import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import './featured.css'

export default () => (
    <StaticQuery
    query={graphql`
        query FeaturedQuery {
            allMarkdownRemark (
                limit: 2
                sort: {
                    fields: [frontmatter___date],
                    order: DESC
                }
                filter: {
                    frontmatter: { featured: { eq: true } }
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
    `}
    render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
        <ul className="popular-articles-list">
        {posts.map(edge => (
            <li className="popular-article">
                <div className="thumbnail" style={{backgroundImage: `url(${edge.node.frontmatter.featuredImage})`}}></div>
                <div className="article-datail-container">
                    <Link to={`/blog/${edge.node.frontmatter.slug}/`} className="article-title-link">
                        <h4 className="article-title">{edge.node.frontmatter.title}</h4>
                    </Link>                           
                    <div className="topics">
                    {edge.node.frontmatter.topics.map(topic => (
                        <Link to={`/${topic.slug}/`} className="topic">{topic.name}</Link>
                    ))}
                    </div>
                    <div className="dates">
                        <div className="posted-date">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clock icon" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                            <time>{edge.node.frontmatter.date}</time>
                        </div>
                        <div className="updated-date">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-repeat icon" viewBox="0 0 16 16">
                                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                            </svg>
                            <time>{edge.node.frontmatter.updatedAt}</time>
                        </div>
                    </div>
                </div>
            </li>
        ))}
        </ul>
        )
    }}
  />
)