/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const { ThemeProvider } = require("@material-ui/core")
const { createMuiTheme } = require("@material-ui/core/styles")
const orange = require("@material-ui/core/colors/orange")

console.log(orange)

const theme = createMuiTheme({
  palette: {
    primary: orange.default,
  },
  typography: palette => ({
    // What does this mean???
    fontFamily: "inherit",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 300,
    },
  }),
})

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
