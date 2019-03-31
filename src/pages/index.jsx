import React from "react"
import { graphql } from "gatsby";

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data);

  const pages = data.allWordpressPage.edges

  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>My Wordpress Blog</h1>
      { pages.map(({node}, index) => (
        <div key={ index }>
          <h2><a href={ node.path }>{ node.title }</a></h2>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
        </div>
      )) }
    </div>
  )
}

export const pageQuery = graphql`
query {
  allWordpressPage {
    edges {
      node {
        id
        title
        excerpt
        slug
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`


export default IndexPage
