import React,{Component} from 'react';
import {Button} from 'antd'


interface Pros{}

class IndexPage extends Component<Pros>{
  render(){
    return(
      <div className="box" style={{color: 'red', backgroundColor: 'black'}}>
        <h1>主页面</h1>
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}

export default IndexPage;