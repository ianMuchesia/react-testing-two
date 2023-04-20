import {render, screen } from "@testing-library/react"
import App from "./App"

/* import matchers from "@testing-library/jest-dom"

expect.extend(matchers) */


test("renders learn react link",()=>{
    render(<App/>)
    const message = screen.getByText(/Hello World/i)
    expect(linkElement).toBeInTheDocument()
})