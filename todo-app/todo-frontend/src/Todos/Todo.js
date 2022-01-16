import React from "react"

const Todo = ({ done, text }) => {
  return (
    <>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
        <span>
          {text}
        </span>
        {done}
      </div>
    </>
  )
}

export default Todo