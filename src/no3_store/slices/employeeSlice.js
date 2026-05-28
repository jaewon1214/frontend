import { createSlice } from "@reduxjs/toolkit"

const initialEmps = [
  {id : "1", name: "John", email: "John4454@example.com", job : "frontend", pay : 600 },
  {id : "2", name: "Peter", email: "Peter4454@example.com", job : "backend", pay : 601 },
  {id : "3", name: "Susan", email: "Susan4454@example.com", job : "db", pay : 602 },
  {id : "4", name: "sue", email: "Sue4454@example.com", job : "ai", pay : 603 }
]

const initialEmp = {
  id : '', name : '',email : '', job: '',pay : ''
}

const initialState = {
  empTable:initialEmps,
  emp: initialEmp,
  mode : '',
  selectedId: ""
}

const employeeSlice = createSlice({
    name : "employeeSlice",
    initialState,
    reducers:{
        select : (state, action) => {
            state.selectedId = action.payload
        },
        set_emp : (state, action) =>{
            state.emp = action.payload
        },
        register : (state, action) =>{
            state.empTable = [
                ...state.empTable,
                {
                    ...action.payload.emp,
                    id : action.payload.newId
                }
            ]
        },
        update : (state, action) => {
            state.empTable = state.empTable.map(emp =>
                emp.id === state.selectedId ?
                action.payload : emp
            )
        },
        remove : (state, action) => {
            state.empTable = state.empTable.filter(emp =>
                emp.id !== state.selectedId
            )
        },
        setmode : (state, action) => {
            state.mode = action.payload
        }
    }
})

export const {setmode, remove, update, register, set_emp, select} = employeeSlice.actions;
export default employeeSlice.reducer;