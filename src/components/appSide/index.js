import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import store from '../../redux/index.js'
import './index.css'

class AppSide extends Component {
  render(){
    const storeState = store.getState();
    return (
      <div className="App-side">
        { storeState.menu.map(item => {
          return <Link to={ "/" + item.key }>
            <div className="side-one" key={"side-" + item.key}>{item.text}</div>
          </Link>
        }) }
      </div>
    );
  }
}

export default AppSide;
