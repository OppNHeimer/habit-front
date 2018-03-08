import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './welcome.css'

import WelcomeForm from '../WelcomeForm/WelcomeForm'

class Welcome extends Component {
  welcomeStatement (props) {
    if (props.mod === 'signup') { return 'nice to meet you' }
    if (props.mod === 'login') { return 'welcome back' }
    return (
      <div>
        <Link to='/welcome/login' className='login__link'>login</Link>
        <span> || </span>
        <Link to='/welcome/signup' className='login__link'>signup</Link>
      </div>
    )
  }

  render () {
    return (
      <div className='login'>
        {/* {this.props.mod && <Link to='/welcome'>back</Link>} */}
        <h1 className='login__h1'>
          {this.welcomeStatement(this.props)}
        </h1>
        {this.props.mod && <WelcomeForm mod={this.props.mod} history={this.props.history} />}
      </div>
    )
  }
}

export default Welcome
