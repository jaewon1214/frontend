import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoListchild from './TodoListchild'
import { TodoContext } from '../../no0_context/TodoContext'

const TodoList = () => {
  const { state } = useContext(TodoContext)
  const { todoList } = state

  return (
    <ListBox>
      {todoList.map(item => (
        <TodoListchild
          key={item.id}
          item={item}
        />
      ))}
    </ListBox>
  )
}

export default TodoList

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`