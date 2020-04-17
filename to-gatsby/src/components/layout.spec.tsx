import * as React from "react"
import * as renderer from "react-test-renderer"

import Layout from "./layout"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout>Content</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
