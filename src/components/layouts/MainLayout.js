import * as React from "react"

import { Navbar } from "../core/Navbar"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default MainLayout
