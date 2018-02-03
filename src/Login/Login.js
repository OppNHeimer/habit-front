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
          Who are you?
        </h1>
        <form>
          <input className='login__input'
            type='text'
            value={this.state.username}
            placeholder='username'
            onChange={this.handleFieldChange}
          />
          <button className='login__submit'
            onClick={this.fieldSubmit}
          />
        </form>
      </div>
    )
  }
}

export default Login
