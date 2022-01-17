import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => <Todo
        done={todo.done}
        text={todo.text}
        onClickComplete={onClickComplete(todo)}
        onClickDelete={onClickDelete(todo)}
      />)}
    </>
  )
}

export default TodoList
