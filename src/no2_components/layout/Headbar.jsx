import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 60px;
  background: #1e293b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const ButtonBox = styled.div``

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: white;
  cursor: pointer;
`

const Headbar = () => {
  return (
    <Header>
      <Logo>Logo</Logo>

      <ButtonBox>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonBox>
    </Header>
  )
}

export default Headbar