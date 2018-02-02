import React from 'react'
import './newHabitForm.css'

let NewHabitForm = props => {
  return (
    <form className='form'>
      <input className='form__input'
        type='text'
        value={props.newHabitName}
        placeholder='new habit'
        onChange={props.handleNewHabitChange}
      />
      <input className='form__submit'
        type='submit'
        value='create'
        onClick={props.createHabit}
      />
    </form>
  )
}

export default NewHabitForm
