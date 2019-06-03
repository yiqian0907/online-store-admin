import React, { Component } from 'react'

class UEditor extends Component {
  state={
    id: this.props.id,
    desc: ''
  }

  componentDidMount(){
    let UE = window.UE;
    let {id} = this.state;
    UE.delEditor(id);
    UE.getEditor(id, {
      autoHeightEnabled: true,
      autoFloatEnabled: true
    })
  }

  render () {
    return (
      <div>
        <textarea id={this.state.id}></textarea>
      </div>
    )
  }
}

export default UEditor