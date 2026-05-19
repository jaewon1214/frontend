import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoPage from './no1_pages/TodoPage'
import HomePage from './no1_pages/Homepage'
import EmployeePage from './no1_pages/EmployeePage'
import Headbar from './no2_components/layout/Headbar'
import Sidebar from './no2_components/layout/Sidebar'


export function App() {

  return (
    <>
      <BrowserRouter>
        <Headbar/>
        <div>
          <Sidebar/>
        </div>
        <div>
          <Routes>
          <Route path = "/" element={<HomePage/>}/>
          <Route path = "/todo" element={<TodoPage/>}/>
          <Route path = "/employee" element={<EmployeePage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
