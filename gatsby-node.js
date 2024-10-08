const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const slugify = require("slugify")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug =
      "/" +
      node.frontmatter.type +
      "/" +
      slugify(node.frontmatter.title, { lower: true })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const categories = await graphql(`
    query allCategory {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "category" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  categories.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Category.tsx`),
      context: {
        id: node.id,
      },
    })
  })
  const krouzky = await graphql(`
    query allCategory {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "krouzky" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  krouzky.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Krouzky.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
