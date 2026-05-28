import React from 'react'
import { DiStackoverflow } from 'react-icons/di'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
//import { TodoContext } from '../../no0_context/TodoContext'
import { change, Register } from '../../no3_store/slices/todoSlice'

const Todoinsert = () => {
  const {todoObj}=useSelector(state=>state.todo);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const {name, value} = e.target;
    dispatch(change({name, value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoObj.subject.trim() === "") return;
    dispatch(Register())
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="subject"
        value={todoObj.subject}
        onChange={handleChange}
        required
        placeholder="할 일을 입력하세요"
      />

      <Button>입력</Button>
    </Form>
  )
}

export default Todoinsert

const Form = styled.form`
  display: flex;
  gap: 10px;

  margin-bottom: 24px;
`

const Input = styled.input`
  flex: 1;

  padding: 14px 16px;

  border: 1px solid #cbd5e1;
  border-radius: 12px;

  font-size: 15px;

  outline: none;

  transition: 0.2s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
  }
`

const Button = styled.button`
  padding: 0 20px;

  border: none;
  border-radius: 12px;

  background: #2563eb;
  color: white;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
  }
`