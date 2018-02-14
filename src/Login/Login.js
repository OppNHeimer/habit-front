import React, { Component } from 'react'

import './login.css'
// import { helpermethods } from './SignInSignUpHelpers'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: undefined,
      password: undefined
    }
  }

  handleFieldChange (e) {
    console.log(e.target.value)
  }

  fieldSubmit (e) {
    e.preventDefault()
    console.log('submit')
  }

  render () {
    return (
      <div className='login'>
        <h1 className='login__h1'>
          Which one are you?
        </h1>
        <form className='login__form'>
          <input className='login__input'
            type='text'
            value={this.state.username}
            placeholder='username'
            onChange={this.handleFieldChange}
          />
          <input type='submit' className='login__submit'
            value=''
            onClick={this.fieldSubmit}
          />
        </form>
      </div>
    )
  }
}

export default Login
