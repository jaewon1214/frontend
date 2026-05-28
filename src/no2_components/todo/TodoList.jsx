import React from 'react'
import styled from 'styled-components'
import TodoListchild from './TodoListchild'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
//import { TodoContext } from '../../no0_context/TodoContext'

const TodoList = () => {
  const { todoList } = useSelector(state=>state.todo);

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