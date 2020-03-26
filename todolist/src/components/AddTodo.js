import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    text: ''
  }

  handlerChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onAddTodo = () => {
    if (!this.state.text) return
    const { onAddTodo } = this.props
    onAddTodo(this.state)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className='box level'>
        <input
          className='input'
          type='text'
          value={this.state.text}
          onChange={this.handlerChange}
        ></input>
        <a className='button is-info' onClick={this.onAddTodo}>
          Add
        </a>
      </div>
    )
  }
}

export default AddTodo
