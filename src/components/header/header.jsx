import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import style from "./header.module.css"

const getUrl = url => {
  const parts = url.split("/")

  parts.splice(0, 3)

  return parts.join("/")
}

class HeaderTemplate extends Component {
  render() {
    const ListLink = props => (
      <li className={style.menuItem}>
        <Link
          to={`/${props.to}`}
          className={style.menuItemLink}
          activeClassName={style.currentItem}
        >
          {props.title}
        </Link>
      </li>
    )

    return (
      <StaticQuery
        query={graphql`
          query {
            allWordpressWpApiMenusMenusItems {
              edges {
                node {
                  items {
                    title
                    url
                    object
                    object_slug
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const menu = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

          const menuItem = menu.map((item, index) => {
            if (item.object === "custom") {
              return (
                <li className={style.menuItem} key={index}>
                  <a href={item.url} className={style.menuItemLink}>
                    {item.title}
                  </a>
                </li>
              )
            }

            const actualUrl = getUrl(item.url)
            return (
              <ListLink
                key={index}
                to={actualUrl}
                title={item.title}
                className={style.menuItemLink}
              />
            )
          })

          return (
            <header className={style.header}>
              <div className={style.container}>
                <Link to="/" className={style.logo}>
                  Gatsby
                </Link>
                <nav>
                  <ul className={style.menu}>{menuItem}</ul>
                </nav>
              </div>
            </header>
          )
        }}
      />
    )
  }
}

export default HeaderTemplate
