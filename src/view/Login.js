import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state={
    username: '',
    password: '',
    captcha: '',
    rememberPwd: false
  }
  
  componentWillMount(){
    let loginUser = JSON.parse(localStorage.getItem('LOGIN_USER'));
    console.log(loginUser);
    if(loginUser){
      this.setState({
        username: loginUser.username,
        password: loginUser.password,
        rememberPwd: true
      })
    }
  }

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox'? e.target.checked: e.target.value
    })
  }

  userLogin = () => {
    axios.post('http://localhost:45550/api/userlogin', {
      username: this.state.username,
      password: this.state.password
    })
    .then((res) => {
      if(res.data.code === 1){
        if(this.state.rememberPwd){
          // console.log(res.data);
          localStorage.setItem('LOGIN_USER', JSON.stringify(res.data.user))
        }
        sessionStorage.setItem('LOGIN_USER', JSON.stringify(res.data.user))
        this.props.history.push('/admin')
      }
    })
  }

  changeCaptcha = (e) => {
    e.target.src = `http://localhost:45550/api/code?${Date.now()}`;
  }

  render () {
    return (
      <div className="login">
        <div className="login-wrap">
          <div className="username-wrap">
            用户名: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/>
          </div>
          <div className="password-wrap">
            密码: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange}/>
          </div>
          <div className="captcha-wrap">
            <div className="input-captcha">
              输入验证码: <input type="text" name="captcha" value={this.state.captcha} onChange={this.handlerChange}/>
            </div>
            <img src={`http://localhost:45550/api/code`} alt="验证码" onClick={this.changeCaptcha}/>
          </div>
          <div className="remember-pwd">
            <input type="checkbox" name="rememberPwd" checked={this.state.rememberPwd} onChange={this.handlerChange}/>
            记住密码
          </div>
          <div className="login-btn">
            <input type="button" value="登录" onClick={this.userLogin}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Login