import React from 'react'
import '../app.css'
import styled from 'styled-components'
const Info2 = styled.div`
  border: 2px solid white;
  padding: 30px;
  color: white;

  min-padding: 10px;
  border-radius: 8px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.9);
`
const UserList = ({ users }) => {
  if (users.length > 0) {
    return (
      <div>
        {users.map(user => <Info2 key={user.id}>{user.body}</Info2>)}
      </div>
    )
  }

  return (
    <Info2>No results!</Info2>
  )
}
export default UserList
