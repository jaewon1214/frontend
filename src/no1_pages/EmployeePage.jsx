import React, { useEffect, useState } from 'react'
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

const EmployeePage = () => {
  // const [empTable, setEmpTable] = useState(initialEmps);
  // const [emp, setEmp] = useState(initialEmp);
  // const [mode,setode] = useState("register");
  // const [selectedId] = useState("");
  const [state, setState] = useState(initalState);
  const {empTable, emp, selectedId, mode} = state;

  useEffect(()=> {
    selectedId &&
    setState(prev => (
      {
        ...prev, 
        emp: empTable.filter(item => item.id === selectedId)[0]
      }
    ))
  },[selectedId,empTable])

  const handledelete = () => {

    if(!selectedId){
      alert("삭제할 데이터를 선택하세요");
      return;
    }
    setState(prev => (
      {
        ...prev,
        empTable: prev.empTable.filter(item => item.id !==selectedId),
        emp : initialEmp,
        selectedId: ""
      }
    ))
  }

    //const [infos, setInfos] = useState(initialEmps); 
  return (
  <div className="employee-page">
    <h2 className="employee-title">Employee Management</h2>

    <EmployeeList state={state} setState={setState} />

    <EmployeeTable state={state} />

    <div className="action-buttons">
      <button onClick={() => setState(prev => ({ ...prev, mode: "register" }))}>
        등록
      </button>
      <button onClick={() => setState(prev => ({ ...prev, mode: "update" }))}>
        수정
      </button>
      <button onClick={() => setState(prev => ({ ...prev, mode: "delete" }))}>
        삭제
      </button>
    </div>

    {
      mode === "register" ?
        <EmployeeRegister setState={setState} />
      : mode === "update" ?
        <EmployeeUpdate emp={emp} state={state} setState={setState} />
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
