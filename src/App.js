import React, { Component } from 'react';
import { Provider, connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Button } from 'antd'
import Routers from './router/index.js'
import './App.css';
import request from './api/index.js'
import store from './redux/index.js'
import appRs from './appRs.js'
import { changeDis, changeMenuDis } from './redux/action.js'
import AppSide from './components/appSide/index.js'

class Index extends Component {
  constructor(){
    super();
    this.state = {
        1:1
    }
    store.subscribe(() => this.setState({1:1}))
    this.getData();
  }
  getData = async () => {
    const data = await request.get("getData")
  }
  render(){
    const storeState = store.getState();
    return (
      <Router>
        <div className="App">
          <div className="header">header</div>
          <div className="main">
          <AppSide />
          <Switch>
            {Routers.map(item => {
              const RouteView = item.component;
              return <Route path={'/' + item.key} render={props => {
                  return <div className="app-view">
                    <RouteView />
                  </div>
                }
              }></Route>
            })}
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default Index;
