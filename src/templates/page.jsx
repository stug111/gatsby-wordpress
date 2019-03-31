import React, { Component } from 'react'
import { graphql } from 'gatsby'

class PageTemplate extends Component {
  render() {
    console.log(this.props.data.allWordpressPage.edges[0].node)
    const currentPage = this.props.data.allWordpressPage.edges[0].node

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
query($id: String!) {
  allWordpressPage(filter: { id: { eq: $id } } ) {
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