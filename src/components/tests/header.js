import React from "react"
import renderer from "react-test-renderer"

import BlogRoll from "../BlogRoll"

describe("BlogRoll", () => {
it("renders correctly", () => {
    const tree = renderer
    .create(<BlogRoll siteTitle="Alex Raymond Travels" />)
    .toJSON()
    expect(tree).toMatchSnapshot()
})
})