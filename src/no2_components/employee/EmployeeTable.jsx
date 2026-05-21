import React from 'react'

const EmployeeTable = ({state}) => {
  const {emp} = state;

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