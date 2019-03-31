import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.allWordpressPage.edges[0].node

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressPage(filter: { id: { eq: $id } }) {
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
