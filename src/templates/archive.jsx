import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import Post from "../components/archive/post"

class ArchiveTemaplate extends Component {
  render() {
    const data = this.props.data
    const archive = data.allWordpressCategory.edges[0].node
    const posts = data.allWordpressPost.edges

    return (
      <Layout>
        <h1>{archive.name}</h1>
        {posts.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </Layout>
    )
  }
}

export default ArchiveTemaplate

export const archiveAuery = graphql`
  query($id: String!) {
    allWordpressCategory(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          slug
          path
        }
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          title
          path
          excerpt
        }
      }
    }
  }
`
