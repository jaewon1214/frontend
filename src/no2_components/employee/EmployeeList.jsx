import Reaccdt, { useEffect } from 'react'
//import { EmployeeContext } from '../../no0_context/EmployeeContext';
//import { useDispatch, useSelector } from 'react-redux';
import { employeeAllGetSlice, select } from '../../no3_store/slices/employeeSlice';
import {
  useAllGetEmployee
} from '../../no3_store/hooks/useEmployee'

const EmployeeList = ({ selectedId, setSelectedId}) => {
  // const {selectedId} = useSelector(state=>state.emp);
  //const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(employeeAllGetSlice())
  // },[dispatch])
  const {data: empTable=[], isLoading, error} = useAllGetEmployee();
  
 
  if(isLoading) return <h3>직원 정보를 불러오는 중...</h3>
  if(error) return <h3>에러 발생: {error.message}</h3>
  return (
    <div className="employee-list">
      {/* {console.log(empTable)} */}
      {empTable?.map(item => (
        <button
          key={item.id}
          item = {item}
          onClick={() => setSelectedId(item.id)}
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