const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            path
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWordpressPage,
    allWordpressCategory,
    allWordpressPost,
  } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.jsx`)
  const archiveTemplate = path.resolve(`./src/templates/archive.jsx`)
  const postTemplate = path.resolve(`./src/templates/post.jsx`)

  allWordpressPage.edges.forEach(edge =>
    createPage({
      path: edge.node.path,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  )

  allWordpressCategory.edges.forEach(edge =>
    createPage({
      path: edge.node.path,
      component: slash(archiveTemplate),
      context: {
        id: edge.node.id,
      },
    })
  )

  allWordpressPost.edges.forEach(edge =>
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  )
}
