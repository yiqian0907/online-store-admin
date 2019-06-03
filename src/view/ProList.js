import React, { Component } from 'react';
import Service from '../service';
import HandleImage from '../handleImg';
import ProListRow from '../component/ProListRow';

class ProList extends Component {

  state={
    productList: []
  }

  componentWillMount(){
    Service.getProList()
      .then(res => {
        this.setState({
          productList: res.data.product
        })
      })
  }
  render () {
    let {productList} = this.state;
    return (
      <div className="pro-list-wrap">
        <div className="tool-bar">
          <div className="tool-bar-top">
            <ul>
              <li className="active" style={{background:`url(${HandleImage.zzBtn}) no-repeat`, backgroundPosition:'0 -244px'}}>出售中商品</li>
              <li style={{background:`url(${HandleImage.zzBtn}) no-repeat`, backgroundPosition:'0 -282px'}}>新品推荐</li>
              <li style={{background:`url(${HandleImage.zzBtn}) no-repeat`, backgroundPosition:'0 -282px'}}>热卖推荐</li>
            </ul>
            <div className="total-num">
              共有<span className="val">{productList.length}</span>条记录
            </div>
          </div>
          <div className="tool-bar-bottom">
            <input type="checkbox" className="allSel" name="allSel" id="allSel"/>&nbsp;
            <label htmlFor="allSel">全选</label>
            <input type="button" value="新品推荐" className="newRecom" />
            <input type="button" value="热卖推荐" className="hotRecom" />
            <input type="button" value="下架" className="remove" />
            <input type="button" value="删除" className="del" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td className="w200">商品名称</td>
              <td className="w70">单价</td>
              <td className="w70">库存</td>
              <td className="w70">总销量</td>
              <td className="w100">发布时间</td>
              <td className="w100">状态</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            {
              productList.map((value, index) => {return (
                <ProListRow product={value} key={index}></ProListRow>
              )})
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProList