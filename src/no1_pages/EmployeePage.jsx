import React, { useEffect, useReducer, useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
//import Register from '../no2_components/employee/Register';
import EmployeeList from '../no2_components/employee/EmployeeList';
import EmployeeRegister from '../no2_components/employee/EmployeeRegister';
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate';
import '../no2_components/employee/EmployeeStyle.css';


const initialEmps = [
  {id : "1", name: "John", email: "John4454@example.com", job : "frontend", pay : 600 },
  {id : "2", name: "Peter", email: "Peter4454@example.com", job : "backend", pay : 601 },
  {id : "3", name: "Susan", email: "Susan4454@example.com", job : "db", pay : 602 },
  {id : "4", name: "sue", email: "Sue4454@example.com", job : "ai", pay : 603 }
]

const initialEmp = {
  id : '', name : '',email : '', job: '',pay : ''
}

const initalState = {
  empTable:initialEmps,
  emp: initialEmp,
  mode : '',
  selectedId: ""
}

const reducer = (state, action) =>{
  switch(action.type){
    case "select" : 
      return {
        ...state,
        selectedId: action.payload
      }
    case "set_emp" : 
      return {
        ...state,
        emp: action.payload
      }
    case "register" :
      return {
        ...state,
        empTable: [
          ...state.empTable,
          {
            ...action.payload.emp,
            id: action.payload.newId
          }
        ]
      }
    case "update":
      return {
        ...state,
        empTable: state.empTable.map(item =>
          item.id === state.selectedId ?
          action.payload : item
        )
      }
    case "delete" :
      return{
        ...state,
        empTable: state.empTable.filter(item =>
          item.id !== state.selectedId
        )
      }
    case "mode" :
      return{
        ...state,
        mode: action.payload
      }
    default : 
      return state;
  }
}


const EmployeePage = () => {
  // const [empTable, setEmpTable] = useState(initialEmps);
  // const [emp, setEmp] = useState(initialEmp);
  // const [mode,setode] = useState("register");
  // const [selectedId] = useState("");
  //const [state, setState] = useState(initalState);
  const [state, dispatch] = useReducer(reducer, initalState)
  const {empTable, emp, selectedId, mode} = state;

  useEffect(()=> {
    selectedId &&
    dispatch({type:"set_emp", payload: empTable.filter(item => item.id === selectedId)[0]})
  },[selectedId,empTable])

  const handledelete = () => {

    if(!selectedId){
      alert("삭제할 데이터를 선택하세요");
      return;
    }
    dispatch({type: "delete"})
  }

    //const [infos, setInfos] = useState(initialEmps); 
  return (
  <div className="employee-page">
    <h2 className="employee-title">Employee Management</h2>

    <EmployeeList state={state} dispatch={dispatch} />

    <EmployeeTable state={state} />

    <div className="action-buttons">
      <button onClick={() => dispatch({type: "mode", payload: "register"})}>
        등록
      </button>
      <button onClick={() => dispatch({type: "mode", payload: "update"})}>
        수정
      </button>
      <button onClick={() => dispatch({type: "mode", payload: "delete"})}>
        삭제
      </button>
    </div>

    {
      mode === "register" ?
        <EmployeeRegister dispatch={dispatch} />
      : mode === "update" ?
        <EmployeeUpdate emp={emp} dispatch={dispatch} />
      : mode === "delete" ?
        <div className="delete-box">
          <button onClick={handledelete}>위 데이터를 삭제하시겠습니까?</button>
        </div>
      : null
    }
  </div>
);
}

export default EmployeePage
