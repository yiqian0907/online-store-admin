import React, { Component } from 'react'

class AddProTitle extends Component {
  render () {
    return (
      <div className="title-wrap">
        <span className="title">{this.props.index}、{this.props.title}</span>
        {this.props.children}
      </div>
    )
  }
}

export default AddProTitle