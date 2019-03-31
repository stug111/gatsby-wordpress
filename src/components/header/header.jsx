import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import style from "./header.module.css"

class HeaderTemplate extends Component {
  render() {
    const ListLink = props => (
      <li className={style.menuItem}>
        <Link to={`/${props.to}`} className={style.menuItemLink}>
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
          console.log(menu)
          return (
            <header className={style.header}>
              <div className={style.container}>
                <Link to="/" className={style.logo}>
                  Gatsby
                </Link>
                <nav>
                  <ul className={style.menu}>
                    {menu.map((item, index) => (
                      <ListLink
                        to={item.object_slug}
                        title={item.title}
                        key={index}
                      />
                    ))}
                  </ul>
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
