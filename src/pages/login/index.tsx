import React,{Component} from 'react';

interface Pros{}

class LoginPage extends Component<Pros>{
  render(){
    return(
      <div className="box" style={{color: 'red', backgroundColor: 'black'}}>
        <h1>登录页</h1>
      </div>
    )
  }
}

export default LoginPage;