import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Todo from './Todo'

// getByText ignoring text in <span> tags:

// calling getByText with this function will find the lowest node in the tree with text as textContent
function textContentMatcher(text) { // https://github.com/testing-library/dom-testing-library/issues/410#issuecomment-977860902
  return function(_content, node) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    // node.textContent returns the text content of itself and all of its children combined
    const hasText = (node) => node.textContent === text
    const nodeHasText = hasText(node);

    const childrenDontHaveText = Array.from(node.children).every( // Array of this node's children
      (child) => !hasText(child) // For childrenDontHaveText to return true, the textContent of each child of the node must not be equal to text paramater
    ) // In conclusion: "we're making sure that the node we're returning is the smallest—in other words the one closest to the bottom of our DOM tree."
    // - https://polvara.me/posts/five-things-you-didnt-know-about-testing-library
    return nodeHasText && childrenDontHaveText
  } // e.g. this node <p>A<a href="TODO">B</a>C</p> has textContent ABC, no other node in the document
    // will have this textContent whilst not having child nodes with textContent ABC.
}

describe('when passed "false" as done prop', () => {

  // Useful: https://kentcdodds.com/blog/avoid-nesting-when-youre-testing

  test('renders todo text', () => {
    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
    const todo = { text: "Think of better Todos" }
    const component = render(<Todo done={false} text={todo.text} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>)
    expect(component.getByText(textContentMatcher('Think of better Todos'))).toBeInTheDocument()
  })
  test('renders text that this todo is not done', () => {
    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
    const todo = { text: "Think of better Todos" }
    const component = render(<Todo done={false} text={todo.text} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>)
    expect(component.getByText(textContentMatcher('This todo is not done'))).toBeInTheDocument()
  })
  test('renders a button to set todo as done and when clicked calls its onClick handler once', () => {
    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
    const todo = { text: "Think of better Todos" }
    const component = render(<Todo done={false} text={todo.text} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>)
    const setDoneButton = component.getByTestId('setDoneButton')
    fireEvent.click(setDoneButton)
    expect(onClickComplete.mock.calls).toHaveLength(1)
  })
  test('renders a button to delete todo and when clicked calls its onClick handler once', () => {
    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
    const todo = { text: "Think of better Todos" }
    const component = render(<Todo done={false} text={todo.text} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>)
    const deleteButton = component.getByTestId('deleteButton')
    fireEvent.click(deleteButton)
    expect(onClickDelete.mock.calls).toHaveLength(1)
  })
})

describe('when passed "true" as done prop', () => {
  test('renders todo text', () => {
    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
    const todo = { text: "Clear the Todo list" }
    const component = render(<Todo done={true} text={todo.text} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>)
    expect(component.getByText(textContentMatcher('Clear the Todo list'))).toBeInTheDocument()
  })
  test('renders text that this todo is done', () => {
    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
    const todo = { text: "Clear the Todo list" }
    const component = render(<Todo done={true} text={todo.text} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>)
    expect(component.getByText(textContentMatcher('This todo is done'))).toBeInTheDocument()
  })
  test('renders a button to delete todo and when clicked calls its onClick handler once', () => {
    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
    const todo = { text: "Clear the Todo list" }
    const component = render(<Todo done={true} text={todo.text} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>)
    const deleteButton = component.getByTestId('deleteButton')
    fireEvent.click(deleteButton)
    expect(onClickDelete.mock.calls).toHaveLength(1)
  })
})