import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"

class PostTemplate extends Component {
  render() {
    const currentPost = this.props.data.allWordpressPost.edges[0].node

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPost.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressPost(filter: { id: { eq: $id } }) {
      edges {
        node {
          title
          content
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
