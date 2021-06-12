import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import './readnext.css';

export default () => (
    <StaticQuery
    query={graphql`
        query ReadNextQuery ($relatedFilePaths: [String]) {
            allMarkdownRemark (
                filter: { fileAbsolutePath: { in: $relatedFilePaths } }
              ) 
              {
                edges {
                    node {
                        id
                        frontmatter {
                            slug
                            topics {
                                name
                                slug
                            }
                            title
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
            <section class="post-recommendation-section">
                <h4>READ NEXT</h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="arrow-icon" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>
                <hr />
                <div class="posts-container">
                {posts.map(edge => (
                    <div class="single-post">
                        <div class="post-image-containter">
                            <Link to={`/blog/${edge.node.frontmatter.slug}/`}><div class="image"></div></Link>
                        </div>
                        <div class="post-detail">
                            <h5 class="title">
                                <Link to={`/blog/${edge.node.frontmatter.slug}/`}>{edge.node.frontmatter.title}</Link>
                            </h5>
                            {edge.node.frontmatter.topics.map(topic => (
                            <p class="topic">{topic.name}</p>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </section> 
            )
        }}
    />
)