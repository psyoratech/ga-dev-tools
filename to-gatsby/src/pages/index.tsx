import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({ partnersImage: { maxWidth: "600px" } })

const PartnersImage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      partners: file(relativePath: { eq: "google-analytics-partners-2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className={classes.partnersImage}
      fluid={data.partners.childImageSharp.fluid}
    />
  )
}

const IndexPage = () => (
  <Layout title="Discover the Gooogle Analytics platform">
    <PartnersImage />
    <Typography variant="h2">About This Site</Typography>
    <Typography variant="body1">
      <b>Google Analytics Demos & Tools</b> is a resource for users and
      developers to discover what's possible with the Google Analytics Platform.
      Learn how to implement GA and applications that can be built to take
      advantage of the flexibility and power of Google Analytics.
    </Typography>
    <Typography>
      The code for this entire site is open source and available on GitHub. We
      encourage you to take a look if you'd like to see how anything is done.
    </Typography>
    <Typography variant="h3">Demos</Typography>
  </Layout>
)

export default IndexPage
