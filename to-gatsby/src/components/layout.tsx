/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import { Home } from "@material-ui/icons"
import classnames from "classnames"

import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
  },
  nav: {
    minWidth: "260px",
    borderRight: `1px solid ${theme.palette.grey[200]}`,
    color: theme.palette.getContrastText(theme.palette.grey[800]),
    backgroundColor: theme.palette.grey[800],
    "& ol": {
      //  TODO - I should probably do this via css-reset.
      margin: 0,
      padding: 0,
      paddingTop: theme.spacing(1),
      listStyle: "none",
      width: "100%",
      "& li": {
        width: "100%",
        display: "flex",
        "& a": {
          color: "unset",
          width: "100%",
          textDecoration: "none",
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.getContrastText(theme.palette.grey[100]),
          },
        },
      },
    },
  },
  innerNav: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(4),
  },
  home: {
    display: "flex",
    alignItems: "center",
  },
  homeIcon: {
    padding: theme.spacing(1),
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  content: {},
}))

interface LayoutProps {
  title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <ol>
          <li>
            <Link to="/">
              <Typography
                className={classnames(classes.innerNav, classes.home)}
                variant="h5"
              >
                <Home className={classes.homeIcon} /> Home
              </Typography>
            </Link>
          </li>
          <li>
            <Typography className={classes.innerNav} variant="h6">
              Demos & Tools
            </Typography>
          </li>
          <li>
            <Link className={classes.innerNav} to="/autotrack/">
              Autotrack
            </Link>
          </li>
          <li>
            <Link className={classes.innerNav} to="/account-explorer/">
              Account Explorer
            </Link>
          </li>
        </ol>
      </nav>
      <main className={classes.main}>
        <header>
          TODO - add in header picture
          <Typography variant="h1">{title}</Typography>
        </header>
        {children}
      </main>
    </div>
  )
}

export default Layout
