import React, { useContext } from 'react'
import { useState } from 'react'
import Todotemplet from '../no2_components/todo/Todotemplet'
import Todoinsert from '../no2_components/todo/Todoinsert'
import TodoList from '../no2_components/todo/TodoList'
import { TodoContext } from '../no0_context/TodoContext'



const TodoPage = () => {
  const {state, dispatch} = useContext(TodoContext);
  //const [state, setState] = useState(initalState);
  return (
    <Todotemplet>
      <Todoinsert />
      <TodoList />
    </Todotemplet>
  )
}

export default TodoPage
