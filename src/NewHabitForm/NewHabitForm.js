import React, { Component } from 'react'
import AddHabitButton from '../functional/AddHabitButton'
import check from '../images/check.png'
import close from '../images/close.png'
import plus from '../images/plus.png'
import './newHabitForm.css'


class NewHabitForm extends Component {
  constructor () {
    super()
    this.state = {
      input: false
    }
    this.toggleInput = this.toggleInput.bind(this)
  }
  
  toggleInput (e) {
    e.preventDefault()
    this.setState({
      input: !this.state.input
    })
  }

  render () {
    let buttonImage = plus
    let action = this.toggleInput
    if (this.props.newHabitName && this.state.input) {
      action = this.props.createHabit
      buttonImage = check
    }
    if (!this.props.newHabitName && this.state.input) {
      buttonImage = close
    }

    return (
      <form className='form'>
        {
          this.state.input && 
          <input className='form__input'
            type='text'
            value={this.props.newHabitName}
            autoFocus
            placeholder='new habit'
            onChange={this.props.handleNewHabitChange}
          />
        }
        <AddHabitButton 
          image={buttonImage}
          // createHabit={this.props.createHabit}
          clickAction={action}
        />
      </form>
    )
  }
}

export default NewHabitForm
