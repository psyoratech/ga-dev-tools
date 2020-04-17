/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"
import orange from "@material-ui/core/colors/orange"

console.log(CssBaseline)

const theme = createMuiTheme({
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

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </React.Fragment>
  )
}
