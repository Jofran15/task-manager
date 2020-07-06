import React, { Component } from 'react'

export default class Task extends Component {
  render() {
    return (
        <div className='col-md-4'> 
             <div className='card'>
        <div className='card-header'>{this.props.title}</div>
        <div className='card-body'>
          <h5 className='card-title'>{this.props.date} </h5>
          <p className='card-text'>
          {this.props.description}
          </p>
        </div>
      </div>
        </div>
     
    )
  }
}
