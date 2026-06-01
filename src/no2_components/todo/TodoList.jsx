import React, {useEffect} from 'react'
import styled from 'styled-components'
import TodoListchild from './TodoListchild'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector} from 'react-redux'
import { todoAllGetSlice } from '../../no3_store/slices/todoSlice'
//import { TodoContext } from '../../no0_context/TodoContext'

const TodoList = () => {
  const { todoList } = useSelector(state=>state.todo);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(todoAllGetSlice())
  },[dispatch, todoList])
 
  return (
    <ListBox>
      {todoList[0]&&todoList.map(item => (
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