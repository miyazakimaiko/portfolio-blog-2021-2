const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await graphql(
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
    const topics = result.data.allTopicJson.edges

    Promise.all(topics.map(async (topic) => {
      await graphql(
        `query ($slug: String!) {
            allMarkdownRemark(
              filter: {
                frontmatter: {
                    topics: {
                        elemMatch: {
                            slug: {eq: $slug}
                        }
                    }
                }
              }
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
        `,
        {slug: topic.node.slug}

      ).then(blogPostResult => {
        if (blogPostResult.errors) {
          throw blogPostResult.errors
        }
    
        // Create blog posts pages.
        const posts = blogPostResult.data.allMarkdownRemark.edges
    
        // Create blog list pages.
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/${topic.node.slug}` : `/${topic.node.slug}/${i + 1}`,
            component: path.resolve(`${__dirname}/src/templates/blog-topic/index.js`),
            context: {
              name: topic.node.name,
              slug: topic.node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
      })
    }))
    return null
  })

  const blogPostCollection = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              fields {
                relatedFileAbsolutePaths
              }
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
          relatedFilePaths: post.node.fields.relatedFileAbsolutePaths.slice(0,4),
          previous,
          next,
        },
      })
    })

    // Create blog list pages.
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list/index.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    return null
  })

  await Promise.all([blogPostCollection])
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
        // date: {
        //   type: "Date",
        //   extensions: {
        //     dateformat: {
        //       formatString: "DD MM YYYY"
        //     }
        //   }
        // },
        // updatedAt: {
        //   type: "Date",
        //   extensions: {
        //     dateformat: {
        //       formatString: "DD MM YYYY"
        //     }
        //   }
        // },
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