import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProTitle from '../component/AddProTitle';
import ImgHandler from '../handleImg';
import QuantityTable from '../component/QuantityTable';
import Ueditor from '../component/Ueditor';
import Service from '../service';
import {productListActionTypes} from '../action/productList';
import {Modal} from 'antd';


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postPro(proInfo){
      // console.log(proInfo);
      return dispatch(productListActionTypes.addProductAsync(proInfo))
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
    },
    images: [],
    address:{
      province: '广东',
      city:'广州'
    },
    deliveryFee: 'salesCover',
    recommendation: 1,
    post:1,
    postDate: null,
    inventory:0,
    products: [],
    visible: false
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

  changeQuantity = (prop)=> {
    let {products} = this.state;
    let includes = false;
    for(let i=0; i<products.length; i++){
      if(products[i].color === prop.color && products[i].size === prop.size){
        includes = true;
        this.setState((preState)=>{
          preState.products[i].quantity = prop.quantity;
          return {
            products: [
              ...preState.products,
            ]
          }
        })
      }  
    }
    if(!includes){
      products.push(prop);
    }
  }

  uploadImg(target){
    let formData = new FormData();
    formData.append("imgFile",target.files[0])
    Service.uploadImg(formData)
    .then((res) => {
      target.previousSibling.previousSibling.src = res.data.img;
      this.state.images.push(res.data.img);
    })
  }

  postProduct = () => {
    let inventory=0;
    let postDate=null;
    let {products, post, proName, price, recommendation, images} = this.state;
    for(let i=0; i<products.length; i++){
      inventory += parseInt(products[i].quantity);
    }
    if(post === 1){
      postDate = new Date(Date.now()).toLocaleDateString();
    }
    this.props.postPro({
      name: proName,
      price,
      inventory,
      sales: 0,
      postDate,
      recommendation,
      images
    })
    .then(() => {
      this.setState({
        visible: true
      })
    })
  }

  handlerAddressChange = (e) => {
    let target = e.target;
    this.setState((preState) => {
      return {
        address: Object.assign(preState.address, 
          {[target.name]: target.value}
        )
      }
    })
  }

  dispalyCitySelect = () =>{
    switch(this.state.address.province){
      case '广东':
        return (
          <select name="city"  value={this.state.address.city} onChange={this.handlerAddressChange}>
            <option value="广州">广州</option>
            <option value="珠海">珠海</option>
            <option value="深圳">深圳</option>
          </select>
        );
      case '四川':
        return (
          <select name="city"  value={this.state.address.city} onChange={this.handlerAddressChange}>
            <option value="成都">成都</option>
            <option value="绵阳">绵阳</option>
            <option value="攀枝花">攀枝花</option>
          </select>
        )
      case '湖北':
        return (
          <select name="city"  value={this.state.address.city} onChange={this.handlerAddressChange}>
            <option value="武汉">武汉</option>
            <option value="荆州">荆州</option>
            <option value="宜昌">宜昌</option>
          </select>
        )
      default: 
       return null;
    }
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
                <QuantityTable 
                  color={this.state.color} 
                  size={this.state.size}
                  changeQuantity={this.changeQuantity}
                ></QuantityTable>
              </table>
              <input type="button" value="保存" style={{background:`url(${ImgHandler.zzBtn}) no-repeat`}}/>
            </div>
            <div className="pro-image-wrap">
              <div className="title">宝贝图片：</div>
              <ul className="image-list">
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload1" name="file" onChange={e => this.uploadImg(e.target)}  style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.uploadImg(e.target)} style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.uploadImg(e.target)} style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.props.uploadImg(e.target)} style={{display:'none'}}/>
                </li>
                <li>
                  <img src={ImgHandler.noPic} alt=""/>
                  <input type="button" value="上传图片" onClick={e=>e.target.nextSibling.click()} />
                  <input type="file" id="upload" onChange={e => this.props.uploadImg(e.target)} style={{display:'none'}}/>
                </li>
                
              </ul>
            </div>
            <div className="pro-desc-wrap">
              <div className="title">商品描述：</div>
              <Ueditor id='editor'></Ueditor>
            </div>
          </div>
        </div>
        <div className="delivery-info-wrap">
          <AddProTitle index={3} title="商品物流信息"></AddProTitle>
          <div className="delivery-info">
            <div className="address-info">
              省份：
              <select name="province" value={this.state.address.province} onChange={this.handlerAddressChange}>
                <option value="广东">广东</option>
                <option value="四川">四川</option>
                <option value="湖北">湖北</option>
              </select>
              城市：
              {this.dispalyCitySelect()}
            </div>
            <div className="delivery-fees">
              <ul>
                <li><input type="radio" value="salesCover" onChange={this.handlerChange} defaultChecked name="deliveryFee" />卖家包邮</li>
                <li><input type="radio" value="cusCover" onChange={this.handlerChange} name="deliveryFee" />买家付运费</li>
                <li><input type="radio" value="cusPick" onChange={this.handlerChange} name="deliveryFee" />买家自提</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pro-recom-info-wrap">
          <AddProTitle index={4} title="商品推荐"></AddProTitle>
          <ul>
            <li>
              新品推荐：
              <span><input type="radio" name="recommendation" value={1} onChange={this.handlerChange} defaultChecked />是</span>
              您当前有<em>3</em>个新品推荐位，您已使用<em>1</em>个
            </li>
            <li>
              热卖推荐：
              <span><input type="radio" name="recommendation" value={2} onChange={this.handlerChange} />是</span>
              您当前有<em>3</em>个热卖推荐位，您已使用<em>0</em>个
            </li>
          </ul>
        </div>
        <div className="pro-post-setting-wrap">
          <AddProTitle index={5} title="发布选项"></AddProTitle>
          <ul>
            <li><input type="radio" name="post" value={1} onChange={this.handlerChange} defaultChecked />立刻发布</li>
            <li><input type="radio" name="post" value={2} onChange={this.handlerChange} />定时发布</li>
            <li><input type="radio" name="post" value={3} onChange={this.handlerChange} />放入仓库</li>
          </ul>
        </div>
        <div className="btns-wrap">
          <input type="button" 
          value="发布" 
          style={{background:`url(${ImgHandler.zzBtn}) no-repeat`}} 
          onClick={ this.postProduct} />
          <input type="button" value="预览" style={{background:`url(${ImgHandler.editBtn}) no-repeat`}} />
        </div>
        <Modal 
          title="提示消息" 
          visible={this.state.visible} 
          okText="前往商品列表"
          cancelText="继续发布商品"
          onOk={()=>{
            this.props.history.push('/admin/prolist')
            this.setState({
              visible: false
            })
          }}
          onCancel={()=>{
            window.location.reload();
            this.setState({
              visible: false
            })
          }}
        >
          <h3>商品发布成功</h3>
          <p>您可以在商品列表-出售中的商品中查看该商品</p>
        </Modal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);