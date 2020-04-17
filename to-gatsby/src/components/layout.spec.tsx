import * as React from "react"
import * as renderer from "react-test-renderer"

import Layout from "./layout"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Layout title="Page Title">Content</Layout>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
