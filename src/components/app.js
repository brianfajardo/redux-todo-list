import React, { Component } from 'react'

import InputForm from '../containers/input_form'
import TodoList from '../containers/todo_list'
import Footer from '../containers/footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <InputForm />
        <TodoList />
        <Footer />
      </div>
    )
  }
}
