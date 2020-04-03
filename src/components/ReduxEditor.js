import React, { useState } from 'react'
import '../app.css'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { changePost } from '../actions/taskActions'

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
const Info = styled.div`
  border: 2px solid white;

  color: white;
  min-padding: 10px;
  border-radius: 8px;
  margin: 5px;
  opacity: 1;
  background-color: black;
`
const ReduxEditor = (props) => {
  const [body, setTodo] = useState('')
  const [editFieldValue, setEditFieldValue] = useState(props.titleBody || '') // create a local variable for using props in input value https://stackoverflow.com/questions/59721035/usestate-only-update-component-when-values-in-object-change
  const dispatch = useDispatch()
  const changePosts = (body) => dispatch(changePost(body))

  const onChange = e => {
    const value = e.target.value
    setTodo(value)
    setEditFieldValue(value)
  }
  const onSubmit = (e) => {
    e.preventDefault()

    changePosts({
      body: body,
      id: props.titleId
    })
    setTodo('')
  }

  return (
    <Info>
      <form onSubmit={onSubmit}>
        {' '}
        <div className='form-group-collection'>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput' />
            <input
              type='text'
              value={editFieldValue}
              onChange={onChange}
              className='form-control'
              id='formGroupExampleInput'
            />
          </div>
        </div>
        <StyledButton type='submit'>Save </StyledButton>
      </form>
    </Info>
  )
}

export default ReduxEditor
