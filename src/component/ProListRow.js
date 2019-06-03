import React, { Component } from 'react'

class ProListRow extends Component {
  state={
    proInfo: {}
  }
  componentWillMount(){
    this.setState({
      proInfo: this.props.product
    })
  }
  render () {
    let {proInfo} = this.state;
    return (
      <tr>
        <td>
          <input type="checkbox" name="" id=""/>
          <img src={`${proInfo.images[0]}`} alt=""/>
          {proInfo.name}
        </td>
        <td>{proInfo.price}</td>
        <td>{proInfo.inventory}</td>
        <td>{proInfo.sales}</td>
        <td>{proInfo.postDate}</td>
        <td>{proInfo.recommendation === 1?'新品推荐':'热卖推荐'}</td>
        <td>
          <a href="#">修改</a> &nbsp;
          <a href="#">删除</a>
        </td>
      </tr>
    )
  }
}

export default ProListRow