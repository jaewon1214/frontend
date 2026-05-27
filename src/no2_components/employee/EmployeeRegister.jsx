import React, { useContext, useState } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeRegister = () => {
  const {state, dispatch} = useContext(EmployeeContext);
  const [emp,setEmp] = useState(state.emp);

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setEmp(prev => (
      {...prev, [name] : value}
    ))
  }

  const handleSubmmit = (event) =>{
    event.preventDefault();
    
    const newId = Date.now().toString();

    dispatch({type: "register", payload:{newId, emp}})

    setEmp(state.emp)
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
