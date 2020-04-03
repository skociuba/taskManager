import React, { Fragment } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { doneTodo } from '../actions/taskActions'
import styled from 'styled-components'

const Container = styled.div`
  border-top: 2px solid #ff5601;

  text-align: center;
  padding: 10px;
  display: grid;
  min-height: 100vh;
`

const Info2 = styled.div`
  border: 2px solid white;
  padding: 30px;
  color: white;
  min-padding: 10px;
  border-radius: 8px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.9);
`
const Execute = () => {
  const titles = useSelector((state) => state.titles)
  const dispatch = useDispatch()
  const toggle = (id, done) => dispatch(doneTodo(id, done))

  const postTitles = titles.map(title => (
    <div
      key={title.id}
      className={title.done ? 'doneTodo' : ''}
      onClick={() => {
        toggle(title.id, title.done)
      }}
    >
      <Info2>

        <h5> {title.body}</h5>
        {title.done}
      </Info2>
    </div>
  ))
  return (
    <Fragment>
      <Container>{postTitles}</Container>
    </Fragment>
  )
}

export default Execute
