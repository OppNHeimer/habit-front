import React, { Component } from 'react'
// import './welcomeForm.css'
import axios from 'axios'
import { API_URL } from '../urls'

class WelcomeForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      message: ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFieldChange (e) {
    let name = e.target.name

    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    let path = API_URL + 'auth/' + this.props.mod
    axios.post(path, {
      email: this.state.username,
      password: this.state.password
    })
      .then(res => {
        console.log(res)
        if (res.data.token) {
          localStorage.setItem('jwt', res.data.token)
          this.props.history.push('/habit100')
        } else if (res.data.message) {
          this.setState({ message: res.data.message })
        } else { console.log('something went wrong receiving jwt or message') }
      })
  }

  render () {
    // console.log(this.state.password)
    console.log('form loaded')
    return (
      <div>
        <form className='login__form'
          onChange={this.handleFieldChange}
        >
          <div className='login__inputs'>
            <input className='login__input'
              type='text'
              name='username'
              autoFocus
              value={this.state.username}
              placeholder='username'
            />
            <input className='login__input'
              type='password'
              name='password'
              value={this.state.password}
              placeholder='password'
            />
          </div>
          <input type='submit' className='login__submit'
            value=''
            onClick={this.handleSubmit}
          />
        </form>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default WelcomeForm
