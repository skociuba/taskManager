import React, { useState } from 'react'
import { addPost } from '../actions/taskActions'
import { resetPost } from '../actions/taskActions'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
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
const ReduxInput = () => {
  const [body, setTodo] = useState('')
  const dispatch = useDispatch()
  const addPosts = body => dispatch(addPost(body))
  const onResets = () => dispatch(resetPost())

  const onChange = e => {
    setTodo(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    if (body.trim() === '') return
    addPosts({
      body: body
    })
    setTodo('')
  }
  const onReset = () => {
    onResets()
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        {' '}
        <div className='form-group-collection'>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput' />
            <input
              type='text'
              name='body'
              value={body}
              onChange={onChange}
              className='form-control'
              id='formGroupExampleInput'
            />
          </div>
        </div>
        <StyledButton type='submit'>Add </StyledButton>
      </form>{' '}
      <StyledButton
        onClick={e =>
          window.confirm('Are you sure you wish to clear the page?') &&
          onReset(e)
        }
      >
        Clear page
      </StyledButton>
    </Container>
  )
}

export default ReduxInput
