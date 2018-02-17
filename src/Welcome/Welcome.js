import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './welcome.css'

import WelcomeForm from '../WelcomeForm/WelcomeForm'

class Welcome extends Component {
  welcomeStatement (props) {
    if (props.mod === 'signup') { return 'Nice to meet you' }
    if (props.mod === 'login') { return 'Welcome back!' }
    return (
      <div>
        <Link to='/welcome/login'>LogIn</Link>
        <span>|</span>
        <Link to='/welcome/signup'>SignUp</Link>
      </div>
    )
  }

  render () {
    return (
      <div className='login'>
        <h1 className='login__h1'>
          {this.welcomeStatement(this.props)}
        </h1>
        {this.props.mod && <WelcomeForm mod={this.props.mod} />}
      </div>
    )
  }
}

export default Welcome
