import React, { useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
import Register from '../no2_components/employee/Register';

const initialStatee = [
  {id : 1, name: "John", email: "John4454@example.com", job : "frontend", pay : 600 },
  {id : 2, name: "Peter", email: "Peter4454@example.com", job : "backend", pay : 601 },
  {id : 3, name: "Susan", email: "Susan4454@example.com", job : "db", pay : 602 },
  {id : 4, name: "sue", email: "Sue4454@example.com", job : "ai", pay : 603 }
]


const EmployeePage = () => {

    const [infos, setInfos] = useState(initialStatee); 
  return (
    <div>
      <EmployeeTable infos={infos}/>
      <Register setInfos={setInfos}/>
    </div>
  )
}

export default EmployeePage
