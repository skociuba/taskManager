import React, { Fragment } from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components'
import { useEffect } from 'react'
const Container = styled.div`
  border-top: 2px solid #ff5601;

  text-align: center;
  padding: 10px;
`
const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 8px;
  min-height: 92vh;
  margin-right: 30px;
  margin-left: 30px;
  display: grid;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const Item = styled.div`
  background-attachment: fixed;
  display: grid;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 10px;
  opacity: 0.7;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  color: white;
`

function Start (props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.confirm(`Welcom to my app. It don't have  sign up option. Default email is : skociuba83@onet.pl and password is : basia81 `)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      <Container>
        <Info>
          <Item>
            <h4>Be mindfulness.</h4>
          
            <LoginForm />
          </Item>
        </Info>
      </Container>
    </Fragment>
  )
}

export default Start
