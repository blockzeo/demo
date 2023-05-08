import React, { Component } from 'react';
import { Button } from 'antd';
import store from '../../redux/index.js'
import { changeMenuDis } from '../../redux/action.js'

class Ovewrview extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  addMenu = () => {
    store.dispatch(changeMenuDis(1,2));
  }
  render(){
    console.log(store.getState())
    return (
      <div>
          <Button onClick={() => this.addMenu()}>123</Button>
      </div>
    );
  }
}

export default Ovewrview;
