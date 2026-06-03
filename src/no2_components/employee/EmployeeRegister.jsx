import React, { useReducer, useState } from 'react'
//import { EmployeeContext } from '../../no0_context/EmployeeContext'
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
//import { employeePostSlice } from '../../no3_store/slices/employeeSlice';
import { usePostRegisterEmployee } from '../../no3_store/hooks/useEmployee';

const initialEmp = {
   name : '',email : '', job: '',pay : ''
}

const EmployeeRegister = () => {
  //const dispatch = useDispatch();
  const registerMutaion = usePostRegisterEmployee();
  const [emp, setEmp] = useState(initialEmp);

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setEmp(prev => (
      {...prev, [name] : value}
    ))
  }

  const handleSubmmit = async (event) =>{
    event.preventDefault();
    try{
      await registerMutaion.mutateAsync(emp)
      alert("직원 등록 완료")
      setEmp(initialEmp)
    }catch(error){
      alert("직원 등록 실패")
    }
    //const newId = Date.now().toString();
   // usePostRegisterEmployee(emp)
  }

 return (
  <form className="employee-form" onSubmit={handleSubmmit}>
    <div>
      <input
        type='text'
        name='name'
        value={emp.name}
        onChange={handleChange}
        placeholder='이름'
      />
    </div>
    <div>
      <input
        type='email'
        name='email'
        value={emp.email}
        onChange={handleChange}
        placeholder='이메일'
      />
    </div>
    <div>
      <input
        type='text'
        name='job'
        value={emp.job}
        onChange={handleChange}
        placeholder='직업'
      />
    </div>
    <div>
      <input
        type='number'
        name='pay'
        value={emp.pay}
        onChange={handleChange}
        placeholder='월급'
      />
    </div>
    <button>등록</button>
  </form>
)
}

export default EmployeeRegister
