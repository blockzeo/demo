import React, { Component } from 'react';
import request from '../../api/index.js'

class Ovewrview extends Component {
  constructor(){
    this.state = {

    }
    this.getData();
  }
  getData = async () => {
    const data = await request("ShowStaff", {});
    console.log(data)
  }
  render(){
    return (
      <div>
        overview
      </div>
    );
  }
}

export default Ovewrview;
