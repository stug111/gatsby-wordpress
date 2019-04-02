import React, { Component } from "react"
import Img from "gatsby-image"

class PostArchive extends Component {
  render() {
    const data = this.props.data.node
    const image = data.featured_media

    return (
      <div>
        {image && <Img fluid={image.localFile.childImageSharp.fluid} />}
        <h2>
          <a href={data.path}>{data.title}</a>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
      </div>
    )
  }
}

export default PostArchive
