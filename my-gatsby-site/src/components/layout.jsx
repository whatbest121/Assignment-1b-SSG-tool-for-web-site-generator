import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'
import { createGlobalStyle } from "styled-components"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(219, 240, 247);
  }`

const Layout = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className={container}>
      <title>{pageTitle}</title>
      <nav className="nav-bar">
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} >
            รายชื่อนักศึกษา
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/subject-list" className={navLinkText}>
              รายวิชาทั้งหมด
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </React.Fragment>
  )
}

export default Layout