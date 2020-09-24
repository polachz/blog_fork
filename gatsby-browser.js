/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"

import { GlobalState } from "./src/components/GlobalState/GlobalState.js"
require("./src/styles/prism-line-numbers.css")
require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/command-line/prism-command-line.css")


export const wrapRootElement = ({ element }) => {
    return (
        <GlobalState>
            {element}
        </GlobalState>
    )
}