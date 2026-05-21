import React from 'react'

const EmployeeList = ({state, setState}) => {
  const {empTable, selectedId} = state;

  const handleClick = (id) => {
    setState(prev => (
      {...prev, selectedId: id }
    ))
  }

  return (
    <div className="employee-list">
      {empTable.map(item => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          style={{
            background: selectedId === item.id ? "#2563eb" : undefined,
            color: selectedId === item.id ? "white" : undefined
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default EmployeeList