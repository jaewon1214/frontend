import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import TodoPage from './no1_pages/TodoPage'
import HomePage from './no1_pages/Homepage'
import EmployeePage from './no1_pages/EmployeePage'
import Headbar from './no2_components/layout/Headbar'
import Sidebar from './no2_components/layout/Sidebar'

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
      <Headbar />

      <Layout>
        <Sidebar />

        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/employee" element={<EmployeePage />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}

export default App