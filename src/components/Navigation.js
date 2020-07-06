import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <p className='navbar-brand mb-0 h1'>
          {this.props.task}
          </p>
        </nav>
      </div>
    )
  }
}
