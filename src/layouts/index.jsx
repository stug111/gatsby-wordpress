import React from "react"

import style from "./index.module.css"
import "./index.css"

import Header from "../components/header/header"

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.container}>{children}</div>
    </>
  )
}
