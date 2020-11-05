import React, { Component } from 'react';
import {Link} from '@reach/router'
import logo from '../assets/logo.png'

class Username extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
   let username = event.target.value
    this.props.setUser(username)
    

  }

  render() {
    return (
      <div>
        <img src={logo} style={{
          width: '60%',
          height: '40%',
          marginTop: '10%'
        }} />
        <div className='username-container'>
        <span>Enter username: </span>
        <form onChange={this.handleSubmit}>
        <input type='text' name='username'  ></input>
        </form>
        <Link to='/tutorial'>
        <input type='submit'></input>
        </Link>
        </div>
      </div>
    );
  }
}

export default Username;