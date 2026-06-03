import React, { useContext, useEffect, useReducer, useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
//import Register from '../no2_components/employee/Register';
import EmployeeList from '../no2_components/employee/EmployeeList';
import EmployeeRegister from '../no2_components/employee/EmployeeRegister';
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate';
import '../no2_components/employee/EmployeeStyle.css';
import { useDispatch, useSelector } from 'react-redux';
//import { EmployeeContext } from '../no0_context/EmployeeContext';
//import { set_emp, setmode, employeeDeleteSlice } from '../no3_store/slices/employeeSlice';
import {
  useAllGetEmployee,
  useDeleteEmployee,
  useGetEmployee
} from '../no3_store/hooks/useEmployee'


const EmployeePage = () => {
  //const [selectedId, setSelectedId] = useState(1);
  //const {state, dispatch} = useContext(EmployeeContext);
  //const {selectedId, empTable, mode} = useSelector(state=>state.emp);
  //const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState('');
  const [mode, setMode] = useState("register")
  const deleteMutation = useDeleteEmployee();
  
  // useEffect(()=> {
  //   const newEmp = empTable.filter(item => item.id === selectedId)[0]
  //   selectedId &&
  //   dispatch(set_emp(newEmp))
  // },[selectedId,empTable])
  

  const handledelete = async () => {

    if(!selectedId){
      alert("삭제할 데이터를 선택하세요");
      return;
    }
    try{
      await deleteMutation.mutateAsync(selectedId)
      alert("직원 삭제 성공")
      setSelectedId(null)
    }catch{
      alert("직원 삭제 실패")
    }
    useDeleteEmployee(selectedId)
  }

    //const [infos, setInfos] = useState(initialEmps); 
  return (
  <div className="employee-page">
    <h2 className="employee-title">Employee Management</h2>

    <EmployeeList
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />

    <EmployeeTable
      selectedId={selectedId}
    />

    <div className="action-buttons">
      <button onClick={() => setMode("register")}>
        등록
      </button>
      <button onClick={() => setMode("update")}>
        수정
      </button>
      <button onClick={() => setMode("delete")}>
        삭제
      </button>
    </div>

    {
      mode === "register" ?
        <EmployeeRegister />
      : mode === "update" ?
        <EmployeeUpdate 
          selectedId={selectedId}
        />
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
