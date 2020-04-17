/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

import "./layout.css"

const useStyles = makeStyles(theme => ({
  nav: {
    "& ol": {
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& li": {
        "& a": {
          padding: theme.spacing(1),
          textDecoration: "none",
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.getContrastText(theme.palette.grey[100]),
          },
        },
      },
    },
  },
  main: {
    margin: "auto",
  },
}))

interface LayoutProps {
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useStyles()

  return (
    <>
      <nav className={classes.nav}>
        <Typography variant="h5">Demos & Tools</Typography>
        <ol>
          <li>
            <Link to="/autotrack/">Autotrack</Link>
          </li>
          <li>
            <Link to="/account-explorer/">Account Explorer</Link>
          </li>
        </ol>
      </nav>
      <main className={classes.main}>{children}</main>
    </>
  )
}

export default Layout
