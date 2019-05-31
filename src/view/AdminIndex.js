import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AdminIndex extends Component {
  render () {
    return (
      <div className="account-info-wrap">
        <div className="account-top">
                <div className="account-top-l">
                  <span className="your-account">您的账户</span>
                  <span className="online-pay">
                    <Link to=''>点击此处进入在线支付</Link>
                  </span>
                </div>
                <div className="account-top-r">
                  <span className="account-type-desc">您的当前账户类型是：</span>
                  <span className="account-type-value">&nbsp;专卖店</span>
                </div>
              </div>
              <div className="account-info-con">
                <div className="left-points">剩余积分:&nbsp; 0</div>
                <div className="consume-points">消费总积分:&nbsp; 0</div>
                <div className="balance">账户余额:&nbsp; 8.00 元
                  <Link to=''>申请结账</Link>
                </div>
                <div className="last-time-login">上次登录时间:&nbsp; 2012-01-06 12:05:48</div>
                <div className="last-ip-login">上次登陆IP：&nbsp;123.125.169.79</div>
              </div>
      </div>
    )
  }
}

export default AdminIndex