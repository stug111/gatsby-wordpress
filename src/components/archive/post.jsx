import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import style from "./post.module.css"

class PostArchive extends Component {
  render() {
    const data = this.props.data.node
    const image = data.featured_media

    return (
      <div className={style.post}>
        <div>
          {image && <Img fluid={image.localFile.childImageSharp.fluid} />}
        </div>
        <div>
          <h2>
            <Link to={data.path}>{data.title}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
        </div>
      </div>
    )
  }
}

export default PostArchive
