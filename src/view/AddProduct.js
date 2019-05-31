import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProTitle from '../component/AddProTitle';
import ImgHandler from '../handleImg';
import QuantityTable from '../component/QuantityTable';
import {proImagesActionTypes} from '../action/proImagesAction';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    uploadImg(imgObj){
      dispatch(proImagesActionTypes.uploadImgAsync(imgObj))
    }
  };
}

class AddProduct extends Component {
  state = {
    proTypeFir:'手机数码1',
    proTypeSec: '手机通讯1',
    proTypeThi: '手机1',
    proName: '手机数码',
    proBrand: '手机数码',
    price: '',
    vipPrice: '',
    color: {
      red: false,
      orange: false,
      yellow: false,
      green: false,
      cyan: false,
      blue: false,
      purple: false,
      brown: false
    },
    size:{
      XS: false,
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false,
      XXXL: false,
      XXXXL: false
    }
  }

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlerColorChange = (e) => {
    let target = e.target;
    this.setState((preState) => {
      return {
        color: Object.assign(preState.color, 
          {[target.name]: target.checked}
        )
      }
    })
  }

  handlerSizeChange = (e) => {
    let target = e.target;
    this.setState((preState) => {
      return {
        size: Object.assign(preState.size, 
          {[target.name]: target.checked}
        )
      }
    })
  }

  render() {
    return (
      <div className="add-pro-wrap">
        <div className="sel-category-wrap">
          <AddProTitle index={1} title="选择商品分类">
            <span className="selected-cate">已选择类目：{this.state.proTypeFir}>{this.state.proTypeSec}>{this.state.proTypeThi}</span>
          </AddProTitle>
          <div className="select-field">
            <div className="fir-cate">一级分类：
              <select name="proTypeFir" onChange={this.handlerChange} value={this.state.proTypeFir}>
                <option value="手机数码1">手机数码1</option>
                <option value="手机数码2">手机数码2</option>
                <option value="手机数码3">手机数码3</option>
              </select>
            </div>
            <div className="sec-cate">二级分类：
              <select name="proTypeSec"onChange={this.handlerChange} value={this.state.proTypeSec}>
                <option value="手机通讯1">手机通讯1</option>
                <option value="手机通讯2">手机通讯2</option>
                <option value="手机通讯3">手机通讯3</option>
              </select>
            </div>
            <div className="thi-cate"onChange={this.handlerChange} value={this.state.proTypeThi}>三级分类：
              <select name="proTypeThi">
                <option value="手机1">手机1</option>
                <option value="手机2">手机2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="fill-pro-info-wrap">
          <AddProTitle index={2} title="填写商品详细信息">
            <input type="button" value="重置" className="reset-btn" style={{background:`url(${ImgHandler.editBtn}) no-repeat`}}/>
          </AddProTitle>
          <div className="fill-pro-info">
            <div className="basic-info">
              <div className="name-brand">
                <div className="name-wrap">
                  商品名称：<span className="required">*</span> &nbsp;
                  <select name="proName" value={this.state.proName} onChange={this.handlerChange}>
                    <option value="手机数码">手机数码</option>
                    <option value="手机数码1">手机数码1</option>
                  </select>
                </div>
                <div className="brand-wrap">
                  商品品牌：<span className="required">*</span> &nbsp;
                  <select name="proBrand" value={this.state.proBrand} onChange={this.handlerChange}>
                    <option value="手机数码">手机数码</option>
                    <option value="手机数码1">手机数码1</option>
                  </select>
                </div>
              </div>
              <div className="price-vipprice-wrap">
                <div className="price-wrap">
                  市场价：<span className="required">*</span> &nbsp;
                  <input type="number" name="price" value={this.state.price} onChange={this.handlerChange} />
                </div>
                <div className="vipprice-wrap">
                  会员价：<span className="required">*</span> &nbsp;
                  <input type="number" name="vipPrice" value={this.state.vipPrice} onChange={this.handlerChange} />
                </div>
              </div>
            </div>
            <div className="pro-prop-wrap">
              <div className="title">
                商品属性
                <input style={{background:`url(${ImgHandler.zzBtn}) no-repeat`}} type="button" value="修改"/>
              </div>
              <div className="pro-prop-main">
                <div className="color-size-wrap">
                  <div className="color-wrap">
                    <div className="title">颜色:</div> 
                    <ul className="color-list">
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.red} name="red" id=""/>
                      <span className="color" style={{backgroundColor:"red"}}></span>
                      <span className="desc">红色</span>
                    </li>
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.orange} name="orange" id=""/>
                      <span className="color" style={{backgroundColor:"orange"}}></span>
                      <span className="desc">橙色</span>
                    </li>
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.yellow} name="yellow" id=""/>
                      <span className="color" style={{backgroundColor:"yellow"}}></span>
                      <span className="desc">黄色</span>
                    </li>
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.green} name="green" id=""/>
                      <span className="color" style={{backgroundColor:"green"}}></span>
                      <span className="desc">绿色</span>
                    </li>
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.cyan} name="cyan" id=""/>
                      <span className="color" style={{backgroundColor:"cyan"}}></span>
                      <span className="desc">青色</span>
                    </li>
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.blue} name="blue" id=""/>
                      <span className="color" style={{backgroundColor:"blue"}}></span>
                      <span className="desc">蓝色</span>
                    </li>
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.purple} name="purple" id=""/>
                      <span className="color" style={{backgroundColor:"purple"}}></span>
                      <span className="desc">紫色</span>
                    </li>
                    <li>
                      <input type="checkbox" onChange={this.handlerColorChange} checked={this.state.color.brown} name="brown" id=""/>
                      <span className="color" style={{backgroundColor:"brown"}}></span>
                      <span className="desc">棕色</span>
                    </li>
                    </ul>
                  </div>
                  <div className="size-wrap">
                    <div className="title">尺码:</div> 
                    <ul className="size-list">
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.XS} name="XS" id=""/>
                        <span className="size">XS</span>
                      </li>
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.S} name="S" id=""/>
                        <span className="size">S</span>
                      </li>
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.M} name="M" id=""/>
                        <span className="size">M</span>
                      </li>
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.L} name="L" id=""/>
                        <span className="size">L</span>
                      </li>
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.XL} name="XL" id=""/>
                        <span className="size">XL</span>
                      </li>
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.XXL} name="XXL" id=""/>
                        <span className="size">XXL</span>
                      </li>
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.XXXL} name="XXXL" id=""/>
                        <span className="size">XXXL</span>
                      </li>
                      <li>
                        <input type="checkbox" onChange={this.handlerSizeChange} value={this.state.size.XXXXL} name="XXXXL" id=""/>
                        <span className="size">XXXXL</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <input className="save-prop" onClick={this.changeQuantityTable} style={{background:`url(${ImgHandler.zzBtn}) no-repeat`}} type="button" value="保存"/>
              </div>
            </div>
            <div className="pro-quantity-wrap">
              <div className="title">添加商品数量</div>
              <table>
                <thead>
                  <tr>
                    <td>颜色</td>
                    <td>尺码</td>
                    <td>数量<span className="required">*</span></td>
                  </tr>
                </thead>
                <QuantityTable color={this.state.color} size={this.state.size}></QuantityTable>
              </table>
              <input type="button" value="保存" style={{background:`url(${ImgHandler.zzBtn}) no-repeat`}}/>
            </div>
            <div className="pro-image-wrap">
              <div className="title">宝贝图片：</div>
              <ul className="image-list">
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload1" name="file" onChange={e => this.props.uploadImg(e.target.files)}  style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.props.uploadImg(e.target.files)} style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.props.uploadImg(e.target.files)} style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.props.uploadImg(e.target.files)} style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.props.uploadImg(e.target.files)} style={{display:'none'}}/>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);