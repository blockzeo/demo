import React, { Component } from 'react';
import request from '../../api/index.js'
import { withRouter } from 'react-router-dom';

class Ovewrview extends Component {
  constructor(){
    super();
    this.state = {

    }
    this.getData();
  }
  getData = async () => {
    const data = await request("ShowStaff", {});
    console.log(data)
  }
  render(){
    console.log(this.props);
    return (
      <div>
        overview
      </div>
    );
  }
}

export default withRouter(Ovewrview);
