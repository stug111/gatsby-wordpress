import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../layouts/index"

const IndexPage = ({ data }) => {
  const pages = data.allWordpressPage.edges

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {pages.map(({ node }, index) => (
        <div key={index}>
          <h2>
            <a href={node.path}>{node.title}</a>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
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
