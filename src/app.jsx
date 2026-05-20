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

const initialState = [
  {id: 1, username: "john", password: "1111"},
  {id: 2, username: "peter", password: "1111"},
  {id: 3, username: "susan", password: "1111"},
  {id: 4, username: "sue", password: "1111"},
]

const initialMode = {
  isLogin : false, username: ""
}

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
  const [users, setUsers] = useState(initialState);
  const [LoginMode, setLoginMode] = useState(initialMode);

  return (
    <BrowserRouter>
      {console.log(users)}
      <Headbar
        LoginMode={LoginMode}
        setLoginMode={setLoginMode}
      />

      <Layout>
        <Sidebar />

        <Content>
          <Routes>
            <Route path="/register" element={<
              RegisterPage
                setUsers={setUsers}
              />
            }/>
            <Route path="/login" element={<
              LoginPage
                users={users}
                setLoginMode={setLoginMode}
              />
            }/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/todo" element={<TodoPage/>}/>
            <Route path="/employee" element={<EmployeePage/>}/>
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}

export default App