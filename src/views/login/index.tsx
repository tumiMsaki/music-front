import * as React from 'react'
import './index.scss'

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [ shouldRender, setShouldRender ] = React.useState(false);
  const [ count, setCount ] = React.useState(1)
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (count >= 0) {
      setShouldRender(true)
      setCount(count-1)
    }
    if (isMounted && !shouldRender) {
      timeoutId = setTimeout(
      () => setShouldRender(true), 
          delayTime
        );
    }
    else if(!isMounted && shouldRender) {
      timeoutId = setTimeout(
        () => setShouldRender(false), 
          delayTime
        );
    }
    return () => clearTimeout(timeoutId);
  });
  return shouldRender;
}

const Login: React.FunctionComponent = () => {
  const [ isMounted, setIsMounted ] = React.useState(true);
  const shouldRenderChild = useDelayUnmount(isMounted, 500);

  const handleToggleClicked = () => {
    setIsMounted(!isMounted);
  }
  return <>
    <div className="container">
      <div className="login_top">
        <div className="login_avatar"/>
      </div>
      {shouldRenderChild ? 
      <div className={["login_bottom", isMounted? null : "unmountedLogin"].join(' ')}>
        <div className="login_frame">
          <div className="login_username">
            <span/>
            <input type="text"/>
          </div>
          <div className="login_password">
            <span/>
            <input type="text"/>
          </div>
          <div className="login_btn">
            <p>登陆</p>
          </div>
        </div>
        <div className="login_options">
          <a onClick={handleToggleClicked}>注册账号</a>
        </div>
      </div> 
      :
      <div className={["regist", "regist_bottom", isMounted? "unmountedRegist" : null].join(' ')}>
      <div className="regist_frame">
        <div className="regist_username">
          <span/>
          <input type="text"/>
        </div>
        <div className="regist_password">
          <span/>
          <input type="text"/>
        </div>
        <div className="regist_repassword">
          <span/>
          <input type="text"/>
        </div>
        <div className="regist_btn">
          <p>确定</p>
        </div>
      </div>
      <div className="regist_options">
        <a onClick={handleToggleClicked}>已有账号</a>
      </div>
    </div>
      }
    </div>
  </>
}



export default Login