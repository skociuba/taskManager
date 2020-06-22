import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import UserList from './UserList'
import styled from 'styled-components'
import '../app.css'

const Input = styled.div`
  height: 200px;
  margin-bottom: 10px;
  border-bottom: 2px solid #ff5601;
`
const StyledButton = styled.button`
  background-color: #ff5601;
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  color: white;
  border-radius: 6px;
  &:hover {
    background-color: black;
    color: white;
  }
  &:focus {
    background-color: #ff5601;
    color: white;
  }
`
const Container = styled.div`
  border-top: 2px solid #ff5601;
  text-align: center;
  padding: 10px;
`
const Search = () => {
  const titles = useSelector((state) => state.titles)

  const getFilteredUsersForText = (text) => {
    return titles.filter(user => user.body.toLowerCase().includes(text.toLowerCase()))
  }
  const [filteredUsers, setUsers] = useState(titles)

  const filterUsers = (e) => {
    const text = e.currentTarget.value
    const filteredUsers = getFilteredUsersForText(text)
    setUsers(filteredUsers)
  }
  const reset = (e) => {
    e.persist()
    setUsers(titles) // using e.persist insead e.preventDefault and  type='reset' defaultValue='Reset' to reser input and filter
  }
  return (
    <Fragment>
      <Container>
        <Input>
          <form>
            {' '}
            <div className='form-group-collection'>
              <div className='form-group'>
                <label htmlFor='formGroupExampleInput' />
                <input
                  type='text'
                  name='body'
                  onInput={filterUsers}
                  className='form-control'
                />
              </div>
              <StyledButton type='reset' defaultValue='Reset' onClick={reset}>
                  Reset input
              </StyledButton>
            </div>
          </form>
        </Input>
        <UserList users={filteredUsers} />
      </Container>
    </Fragment>
  )
}

export default Search
