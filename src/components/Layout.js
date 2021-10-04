import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}
export default Layout
