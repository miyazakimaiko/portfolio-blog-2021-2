const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { link } = require("fs")

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "TopicJson",
      fields: {
        name: "String!",
        slug: "String!"
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const topicsCollection = graphql(
    `
      {
        allTopicJson {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog topic list pages.
    const topics = result.data.allTopicJson.edge

    topics.forEach((topic) => {
      createPage({
        path: `${topic.node.slug}`,
        component: path.resolve(`./src/templates/blog-topic/index.js`),
        context: {
          slug: topic.node.slug,
          topicName: topic.node.name,
        },
      })
    })

    return null
  })

  const blogPostCollection = graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog/${post.node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/blog-post/index.js`),
        context: {
          slug: post.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    return null
  })

  return Promise.all([topicsCollection, blogPostCollection])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

}

// https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        title: {
          type: "String"
        },
        date: {
          type: "Date",
          extensions: {
            dateformat: {
              formatString: "DD MM YYYY"
            }
          }
        },
        updatedAt: {
          type: "Date",
          extensions: {
            dateformat: {
              formatString: "DD MM YYYY"
            }
          }
        },
        featuredImage: {
          type: "String"
        },
        slug: {
          type: "String"
        },
        topics:  {
          type: "[TopicJson]",
          extensions: {
            link: {by: "slug"}
          }
        },
        topic: {
          type: "TopicJson",
          resolve: (source, args, context, info) => {
            return context.nodeModel
              .getAllNodes({ type: "TopicJson" })
              .find(topic => topic.slug === source.topic)
          },
          extensions: {
            link: {}
          }
        },
        featured: {
          type: "Boolean"
        },
      },
    }),
  ]
  createTypes(typeDefs)
}


//https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#creating-type-definitions