import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout title="Page Not Found">
    <Link to="/">Home</Link>
  </Layout>
)

export default NotFoundPage
