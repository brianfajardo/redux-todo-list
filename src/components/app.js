import React, { Component } from 'react'
import styled from 'styled-components'

import InputForm from '../containers/InputForm'
import TodoList from '../containers/TodoList'
import Footer from '../containers/Footer'

const StyledContainer = styled.div`
  background: papayawhip
`

const StyledHeader = styled.h3`
  text-align: center
  margin-top: 15px
  padding-top: 10px;

  > p {
    font-size: 15px
  }
`

export default class App extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeader>
          React/Redux To Do List
          <p>Click on a todo to complete!</p>
          </StyledHeader>
        <InputForm />
        <TodoList />
        <Footer />
      </StyledContainer>
    )
  }
}