import React, { Component } from 'react';
import ImgHandler from '../handleImg';
import {NavLink, Link, Route, HashRouter as Router} from 'react-router-dom';
import AdminIndex from './AdminIndex';
import AddPro from './AddProduct';
import ProList from './ProList';

class Admin extends Component {

  mouseEnter = (e) => {
    e.target.style.backgroundPosition = '78px -50px';
    e.target.style.backgroundColor =  '#dee0e0';
  }
  onMouseLeave = (e) => {
    e.target.style.backgroundPosition = '78px -19px';
    e.target.style.backgroundColor =  '#ebecec';
  }
  render () {
    let userName = JSON.parse(sessionStorage.getItem('LOGIN_USER')).username;
    let adminMenuTitleStyle = {
      backgroundImage: `url(${ImgHandler.zzIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50px 11px'
    }
    let adminMenuListStyle = {
      backgroundImage: `url(${ImgHandler.zzIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '78px -19px',
      backgroundColor:  '#ebecec'
    }
    return (
      <div className="admin">
        <div className="top-head-wrap" style={{background: `url(${ImgHandler.satBg}) repeat-x`}}>
          <div className="top-head">
            <div className="logo-wrap">
              <img src={`${ImgHandler.satLogo}`} alt=""/>
            </div>
            <div className="top-head-r">
              <div className="top-head-r-t">
                <span className="user-name">
                  <Link to={`${this.props.match.path}`}>{userName}</Link>
                </span>
                <span className="greeting">欢迎登录异联商城后台管理系统</span>
              </div>
              <ul className="top-head-r-b" style={{background: `url(${ImgHandler.satNav}) no-repeat`}}>
                <li className="active">
                  <Link to={`${this.props.match.path}`}>管理首页</Link>
                </li>
                <li>
                  <Link to={``}>商城首页</Link>
                </li>
                <li>
                  <Link to={``}>帮助中心</Link>
                </li>
                <li>
                  <Link to={``}>退出系统</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="top-greeting-wrap">
          <div className="top-greeting-con">
            <div className="top-greeting-l">
              功能管理项
            </div>
            <div className="greetings">
              {userName}, 欢迎登录异联商家自助管理系统
            </div>
          </div>
        </div>
        <div className="main-con-wrap">
          <div className="main-con">
            <div className="admin-menu-list-wrap">
              <div className="title product-admin" style={adminMenuTitleStyle}>
                商品管理
              </div>
              <ul className="product-admin-list">
                <li className="add-pro" style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <NavLink to={`${this.props.match.path}/addpro`}>添加商品</NavLink>
                </li>
                <li className="pro-list"  style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <NavLink to={`${this.props.match.path}/prolist`}>商品列表</NavLink>
                </li>
                <li className="pick-pos"  style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/pick`}>自提点管理</Link>
                </li>
              </ul>
              <div className="title order-admin" style={adminMenuTitleStyle}>
                订单管理
              </div>
              <ul className="order-admin-list">
                <li className="order-sea" style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/addpro`}>订单查询</Link>
                </li>
                <li className="delivery"  style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/prolist`}>发货管理</Link>
                </li>
              </ul>
              <div className="title store-admin" style={adminMenuTitleStyle}>
                店铺管理
              </div>
              <ul className="store-admin-list">
                <li className="add-pro" style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/addpro`}>商家资料管理</Link>
                </li>
                <li className="pro-list"  style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/prolist`}>买家须知</Link>
                </li>
                <li className="pick-pos"  style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/pick`}>店铺公告</Link>
                </li>
                <li className="add-pro" style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/addpro`}>轮播图片设置</Link>
                </li>
                <li className="pro-list"  style={adminMenuListStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.onMouseLeave}>
                  <Link to={`${this.props.match.path}/prolist`}>店铺留言管理</Link>
                </li>
              </ul>
            </div>
            <Router>
            <Route path={`${this.props.match.path}/`} exact component={AdminIndex}></Route>
            <Route path={`${this.props.match.path}/addpro`} component={AddPro}></Route>
            <Route path={`${this.props.match.path}/prolist`} component={ProList}></Route>
            </Router>
          </div>
        </div>
        <div className="footer-bar-wrap" style={{background: `url(${ImgHandler.sabBg}) repeat-x`}}>
          <div className="footer-bar">
            <ul className="novice-list">
              <li className="title" style={{background:`url(${ImgHandler.bottomIcon}) no-repeat`}}>新手上路</li>
              <li>
                <Link to="">注册/登录</Link>
              </li>
              <li>
                <Link to="">购物流程</Link>
              </li>
              <li>
                <Link to="">关于积分</Link>
              </li>
              <li>
                <Link to="">物流配送</Link>
              </li>
            </ul>
            <ul className="consumer-protect-list">
              <li className="title" style={{background:`url(${ImgHandler.bottomIcon1}) no-repeat`}}>消费保障</li>
              <li>
                <Link to="">退换货政策</Link>
              </li>
              <li>
                <Link to="">退换货流程</Link>
              </li>
              <li>
                <Link to="">100%正品保证</Link>
              </li>
            </ul>
            <ul className="payment-list">
              <li className="title" style={{background:`url(${ImgHandler.bottomIcon2}) no-repeat`}}>支付方式</li>
              <li>
                <Link to="">在线支付</Link>
              </li>
              <li>
                <Link to="">银行支付</Link>
              </li>
              <li>
                <Link to="">积分支付</Link>
              </li>
            </ul>
            <ul className="service-list">
              <li className="title" style={{background:`url(${ImgHandler.bottomIcon3}) no-repeat`}}>商家服务</li>
              <li>
                <Link to="">加盟优势</Link>
              </li>
              <li>
                <Link to="">入驻流程</Link>
              </li>
              <li>
                <Link to="">招商对象</Link>
              </li>
              <li>
                <Link to="">异联商学院</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-wrap">
          <div className="footer-top-list">
            <span>
              <Link to=''>公司介绍</Link>&nbsp;|
            </span>
            <span>
              <Link to=''>营销中心</Link>&nbsp;|
            </span>
            <span>
              <Link to=''>异联特色</Link>&nbsp;|
            </span>
            <span>
              <Link to=''>招聘中心</Link>&nbsp;|
            </span>
            <span>
              <Link to=''>联系我们</Link>&nbsp;|
            </span>
            <span>
              <Link to=''>友情链接</Link>
            </span>
          </div>
          <div className="copyright-info">
            <p>Copyright@2011 异联中华人民共和国增值电信业务经营许可证：浙B2-20090266</p>
            <p>中华人民共和国互联网药品信息服务资格证：（浙）-经营性-2011-2021</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin