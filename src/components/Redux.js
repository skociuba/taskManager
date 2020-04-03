import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReduxEditor from './ReduxEditor'
import { removePost, toggleTodo } from '../actions/taskActions'
import styled from 'styled-components'
import ReduxInput from './ReduxInput'
import '../app.css'
const Container = styled.div`
  border-top: 2px solid #ff5601;
  text-align: center;
  padding: 10px;
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
  &:active {
    background-color: black;
    color: white;
  }
`

const Item = styled.div`
  border: 2px solid white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: rgba(61, 61, 61, 0.3);
  width: 100%;
  color: white;
  height: 310px;
`
const Info2 = styled.div`
  border: 2px solid white;
  padding: 30px;
  color: white;

  min-padding: 10px;
  border-radius: 8px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 1);
`
const Redux = () => {
  const titles = useSelector((state) => state.titles)

  const dispatch = useDispatch()
  const toggle = (id, completed) => dispatch(toggleTodo(id, completed))

  const onDelete = id => dispatch(removePost(id))

  const postTitles = titles.map(title => (
    <Item key={title.id}>
      <Info2> {title.body}</Info2>

      <StyledButton onClick={() => window.confirm('Are you sure you wish to delete this info?') && onDelete(title.id)}>
          Remove
      </StyledButton>
      <StyledButton
        onClick={() => {
          toggle(title.id, title.completed)
        }}
      >

        {title.completed ? 'Close' : 'Edit'}
      </StyledButton>
      <div>
        {title.completed && (
          <ReduxEditor titleBody={title.body} titleId={title.id} />
        )}
      </div>
    </Item>
  ))
  return (
    <Fragment>
      <Container>
        <ReduxInput />

        {postTitles}
      </Container>
    </Fragment>
  )
}

export default Redux
