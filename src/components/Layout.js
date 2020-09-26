import React from "react"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Nav />
      {children}
    </div>
  )
}
export default Layout
