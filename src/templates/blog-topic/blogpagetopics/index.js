import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import './blogpagetopics.css'

export default (currentPage) => (
    <StaticQuery
    query={graphql`
        query BlogTopicPageTopicsQuery {
            allTopicJson {
                edges { 
                    node {
                        name
                        slug
                    }
                }
            }
        }
    `}
    render={data => (
        <aside id="sidebar">
            <div className="blog-nav">
                <h5 className="blog-nav-title">Topics</h5>
                <ul className="blog-nav-list">
                    <li>
                        <Link to={`/blog/`}>All</Link>
                    </li>
                {data.allTopicJson.edges.map(edge  => {
                    if (edge.node.name === currentPage.topicName) {
                        return (
                            <li>
                            <Link to={`/${edge.node.slug}/`} className="active">{edge.node.name}</Link>
                            </li>
                        )
                    } 
                    else {
                        return (
                            <li>
                            <Link to={`/${edge.node.slug}/`}>{edge.node.name}</Link>
                            </li>
                        )
                    }
                })}
                </ul>
                <hr/>
            </div>
        </aside>
    )}
  />
)