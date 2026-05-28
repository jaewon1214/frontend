import React from 'react'
//import { EmployeeContext } from '../../no0_context/EmployeeContext';
import { useSelector } from 'react-redux';

const EmployeeTable = () => {
  //const {state} = useContext(EmployeeContext);
  const {emp} = useSelector(state=>state.emp);
  return (
    <table className="employee-table">
      <thead>
        <tr>
          {emp && Object.keys(emp).map(key => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          {emp && Object.values(emp).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default EmployeeTable