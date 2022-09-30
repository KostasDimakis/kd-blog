import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  if (isRootPath) {
    return (
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
    )
  }

  return (
      <div className="global-wrapper">
        <header className="global-header">
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        </header>
        <main>{children}</main>
      </div>
  )
}

export default Layout
