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
            <input/>
          </div>
          <div className="login_password">
            <input/>
          </div>
        </div>
        <div className="login_options">
          <p>忘记密码</p>
          <p>注册账号</p>
        </div>
      </div>
    </div>
  </>
}

export default Login