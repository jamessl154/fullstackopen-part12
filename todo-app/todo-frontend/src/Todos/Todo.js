import React from "react"

const Todo = ({ done, text, onClickDelete, onClickComplete }) => {

  const doneInfo = (
    <>
      <span data-testid="isDone">This todo is done</span>
      <span>
        <button data-testid="deleteButton" onClick={onClickDelete}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span data-testid="isDone">This todo is not done</span>
      <span>
        <button data-testid="deleteButton" onClick={onClickDelete}> Delete </button>
        <button data-testid="setDoneButton" onClick={onClickComplete}> Set as done </button>
      </span>
    </>
  )

  return (
    <>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
        <span>
          {text}
        </span>
        {done ? doneInfo : notDoneInfo}
      </div>
    </>
  )
}

export default Todo