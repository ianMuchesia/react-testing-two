import {render, screen } from "@testing-library/react"
import Header from "../Header"

/* import matchers from "@testing-library/jest-dom"

expect.extend(matchers) */


test("should render some text passed into title prop",()=>{
    render(<Header title="MyHeader"/>)
    const headingElement = screen.getByText(/myheader/i)
    expect(headingElement).toBeInTheDocument()
})


/* test("should render some text passed into title prop",()=>{
    render(<Header title="MyHeader"/>)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
}) */

/* 

test("should render some text passed into title prop",()=>{
    render(<Header title="MyHeader"/>)
    const headingElement = screen.getByRole("heading", { name:"MyHeader"})
    expect(headingElement).toBeInTheDocument()
})



test("should render some text passed into title prop",()=>{
    render(<Header title="MyHeader"/>)
    const headingElement = screen.getByTitle("heading")
    expect(headingElement).toBeInTheDocument()
})


test("should render some text passed into title prop",()=>{
    render(<Header title="MyHeader"/>)
    const headingElement = screen.getByTestId("header-2")
    expect(headingElement).toBeInTheDocument()
})


//FIND BY

test("should render some text passed into title prop",async()=>{
    render(<Header title="MyHeader"/>)
    const headingElement =await screen.findByText(/myheader/i)
    expect(headingElement).toBeInTheDocument()
})



//query by
test("should render some text passed into title prop",()=>{
    render(<Header title="MyHeader"/>)
    const headingElement = screen.queryByText(/myhear/i)
    expect(headingElement).not.toBeInTheDocument()
})


//get by
test("should render some text passed into title prop",()=>{
    render(<Header title="MyHeader"/>)
    const headingElement = screen.getAllByRole("heading")
    expect(headingElement.length).toBe(2)
}) */