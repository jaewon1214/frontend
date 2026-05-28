import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import TodoPage from './no1_pages/TodoPage'
import HomePage from './no1_pages/Homepage'
import EmployeePage from './no1_pages/EmployeePage'
import Headbar from './no2_components/layout/Headbar'
import Sidebar from './no2_components/layout/Sidebar'
import LoginPage from './no1_pages/user/LoginPage'
import RegisterPage from './no1_pages/user/RegisterPage'
import { useState } from 'react'
import EmployeeProvider from './no0_context/EmployeeContext'
import UserProvider from './no0_context/UserContext'
import TodoProvider from './no0_context/TodoContext'
import { Provider } from 'react-redux'
import store from './no3_store'





const Layout = styled.div`
  display: flex;
  padding-top: 60px;
`

const Content = styled.main`
  margin-left: 220px;
  padding: 30px;
  width: calc(100% - 220px);

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 80px 20px 20px 20px;
  }
`

export function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Headbar/>
      <Layout>
        <Sidebar />
        <Content> 
          <Routes>
            <Route path="/register" element={<
              RegisterPage/>
            }/>
            <Route path="/login" element={<
              LoginPage/>
             }/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/todo" element={
              <TodoPage/>
            }/>
            <Route path="/employee" element={
              <EmployeePage/>
            }/>
          </Routes>
        </Content>
      </Layout>
    </Provider>
  </BrowserRouter>
  )
}

export default App