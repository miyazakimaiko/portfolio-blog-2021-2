---
title: How to create a related post component with gatsby-remark-related-posts plugin
date: "2021-06-22"
slug: how-to-create-a-related-post-component-with-gatsby-remark-related-posts-plugin
updatedAt: "2021-06-22"
description: Summarised steps to implement gatsby-remark-related-posts
featured: true
topics:
 - gatsby
featuredImage: './related-post.jpg'
---

## Motivation

I had difficult time dealing with creating a related post conponent when I build this website. I found a couple of ways to implement it without a plugin, but I wanted it as simple as possible, and didn't mind using a plugin for it. Then I found gatsby-remark-related-posts plugin, which seemed feasible, but I couldn't find solutions to some of the issues I came across when implementing it. So this article is for the people who stuck like me. I'll summarise implementation steps to make it as easy as possible to understand.

## Requirements

    **Using allMarkdownRemark for querying .md files**
    It seems like it's not compatible with .mdx files or mdx query. If you find it possible, please let me know by creating an issue [here](). 
    
    **gatsby-remark-related-posts plugin is installed**    
    To install the plugin, please refer to [this page](https://www.gatsbyjs.com/plugins/gatsby-remark-related-posts/).

    **My file hierarchy**

    ```js
    project
    │   gatsby-config.js
    │   gatsby-node.js   
    │
    └───content
    │   └───blog 
    │       └───article1   
    │       │   │   index.md
    │       │   │   featured_image.jpg
    │       │
    │       └───article2
    │       │   │   index.md
    │       │   │   featured_image.jpg
    │       
    └───src
    │   └───templates 
    │       └───article.js
    ...     ...

    ```
    This folder is used as the example.


## Implementation

### gatsby-config.js

```js
plugins [
  {
    resolve: "gatsby-remark-related-posts",
    options: {
      posts_dir: `${__dirname}/content/blog`,
      doc_lang: "en",
    },
  },
]
```

Set directory where you include your markdown files in `posts_dir`.

### gatsby-node.js

```js
exports.createPages = async ({ graphql, actions }) => {
    
  const { createPage } = actions

  const blogPostCollection = await graphql(
    `
      {
        allMarkdownRemark {
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

    // Create an individual article page for each article.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      createPage({
        path: `blog/${post.node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: post.node.frontmatter.slug,
          relatedFilePaths: post.node.fields.relatedFileAbsolutePaths.slice(0,4),
        },
      })
    })

    // Create blog list pages here..

    return null
  })

  await Promise.all([blogPostCollection])
}
```

### Query
This code allows the plugin to create relatedFileAbsolutePaths field in the each `MarkdownRemark` node. Details: https://www.gatsbyjs.com/plugins/gatsby-remark-related-posts/

### createPages action
Pass the `relatedFileAbsolutePaths` as a variable to the individual page. To do so, we can simply set `relatedFilePaths: post.node.fields.relatedFileAbsolutePaths.slice(0,4)` inside context. You could just pass whole list of related file absolute paths, or specify how many article you want to pass by slicing the list.

**Caution with the Query**
In my blog, I set `slug` as a part of frontmatter, but most of cases you have `slug` field.

## templates/article.js


```js
export const query = graphql`
    query BlogTemplate($slug: String! $relatedFilePaths: [String]) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            ...
        }
        allMarkdownRemark(filter: {fileAbsolutePath: {in: $relatedFilePaths}}, limit: 4) {
            edges {
              node {
                ...
            }
        }
    }  
```

We can simply query related posts when fetching the single article like this. Make sure to mention the argument `$relatedFilePaths: [String]`, which we passed to this page in the gatsby-node.js file.

In the template, you'll be able to access the main article data from `props.data.markdownRemark` and related posts data from `props.data.allMarkdownRemark.edges`.

Hooray! Now I have a related posts conponent available to the each page 🎉

## Consideration

This plugin accumulates related posts on the build time rather than runtime, so I'd say it's highly efficient. However, I do not have much articles on my blog so I don't yet know tell how it affects the speed of the build time. I'll do more research about it, and update this article when I find any realization in the future.

Thanks for reading!