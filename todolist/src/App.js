import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodos from './components/AddTodo'
import Header from './components/Header'

class App extends Component {
  state = {
    todos: []
  }

  onRemoveTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }

  addTodo = todo => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({ todos })
  }

  render() {
    return (
      <div className='App'>
        <section className='section'>
          <div className='container'>
            <Header />
            <AddTodos onAddTodo={this.addTodo} />
            <Todos todos={this.state.todos} onRemoveTodo={this.onRemoveTodo} />
          </div>
        </section>
      </div>
    )
  }
}

export default App
