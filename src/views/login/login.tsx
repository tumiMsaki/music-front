import * as React from 'react'
import './login.scss'

const Login: React.FunctionComponent = () => {
  return <>
    <div className="container">
      <div className="login_top">
        <div className="login_avatar"/>
      </div>
      <div className="login_bottom">
        <div className="login_frame">
          <div className="login_username">
            <span/>
            <input type="text"/>
          </div>
          <div className="login_password">
            <span/>
            <input type="text"/>
          </div>
        </div>
        <div className="login_options">
          <a>忘记密码</a>
          <a>注册账号</a>
        </div>
      </div>
    </div>
  </>
}

export default Login