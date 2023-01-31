import React from "react"
import { screen, render} from "@testing-library/dom"

import { StarsContextProvider } from './'



describe('StarsContextProvider', () => {
    it("must show a list", () => {
        render(<StarsContextProvider/>)
        expect(screen.queryByText(/show list/i))
    })
})
