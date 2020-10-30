import React from "react"
import renderer from "react-test-renderer"
import Content from "../Content"
describe("Content", () => {
    it("renders correctly", () => {
        const tree = renderer
        .create(<Content siteTitle="Alex Raymond Travels" />)
        .toJSON()
        expect(tree).toMatchSnapshot()
    })
    })