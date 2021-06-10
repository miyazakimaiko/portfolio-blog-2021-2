import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import './topics.css'

export default () => (
    <StaticQuery
    query={graphql`
        query TopicsQuery {
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
    render={data => {
        const topics = data.allTopicJson.edges
        return (
        <ul className="nav-sub-menu-link-list">
        {topics.map(edge => (
            <li className="sub-menu-link">
                <Link to={`/${edge.node.slug}/`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-return-right arrow-icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                    <p className="sub-menu-link-text">{edge.node.name}</p>
                </Link>
            </li>
        ))}
        </ul>
        )
    }}
  />
)