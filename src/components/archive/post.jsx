import React, { Component } from "react"

class PostArchive extends Component {
  render() {
    const data = this.props.data.node
    return (
      <div>
        <h2>
          <a href={data.path}>{data.title}</a>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
      </div>
    )
  }
}

export default PostArchive
