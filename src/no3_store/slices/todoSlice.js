import { createSlice } from "@reduxjs/toolkit"


const initialObj = {id : "", subject : "", checked : false}

const initialState = {
  todoList : [
    {id : 1, subject : "HTML 공부", checked : true},
    {id : 2, subject : "CSS 공부", checked : false},
    {id : 3, subject : "React 공부", checked : true},
    {id : 4, subject : "Python 공부", checked : false},
  ],
  todoObj : initialObj
}

const todoSlice = createSlice({
    name : "todoSlice", 
    initialState,
    reducers : {
        remove : (state, action) => {
            state.todoList = state.todoList.filter(todo=>
                (todo.id !== action.payload)
            )
        },
        Updata : (state, action) =>{
            state.todoList = state.todoList.map(todo=>(
                todo.id === action.payload.id ?
                    {...todo, subject: action.payload.value}
                    :todo
            ))
        },
        Toggle : (state, action) =>{
            state.todoList = state.todoList.map(todo=>(
                todo.id === action.payload ?
                    { ...todo, checked: !todo.checked }
                    :todo
            ))
        },
        change : (state, action) =>{
            state.todoObj = {
                ...state.todoObj,
                [action.payload.name] : action.payload.value
            }
        },
        Register : (state) =>{
            state.todoList = [
                ...state.todoList,
                {
                    ...state.todoObj,
                    id: state.todoList.length>0 ?
                        Math.max(...state.todoList.map(todo=>todo.id)) +1
                        : 1
                }
            ]
            state.todoObj = initialObj
        }
    }
})


export const {remove, Updata, Toggle, change, Register} = todoSlice.actions;
export default todoSlice.reducer;