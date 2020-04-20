/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme, withStyles } from "@material-ui/core/styles"
import orange from "@material-ui/core/colors/orange"

const globalTheme = createMuiTheme({
  palette: {
    primary: orange,
  },
  typography: palette => ({
    // What does this mean???
    fontFamily: "inherit",
    h1: {
      fontSize: "2.5em",
      fontWeight: 300,
    },
    h2: {
      fontSize: "1.75em",
      fontWeight: 300,
      margin: "1em 0",
    },
    h3: {
      fontSize: "1.25em",
      fontWeight: 700,
      margin: "1em 0",
    },
  }),
})

const styles = theme => ({
  "@global": {
    "html body #gatsby-focus-wrapper, #___gatsby": {
      height: "100%",
      margin: 0,
      padding: 0,
    },
    p: {
      paddingBottom: theme.spacing(1),
    },
    a: {
      color: theme.palette.primary[800],
    },
  },
})

// This is a bit weird, but it's the easiest way to set global css that can use
// values from the theme object.
const MyBaseline = withStyles(styles)(() => {
  return null
})

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={globalTheme}>
        <MyBaseline />
        {element}
      </ThemeProvider>
    </React.Fragment>
  )
}
