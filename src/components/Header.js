import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='header'>
        <i className='fa fa-menu' />
        <img src={require("../assets/images/logoBackTrans.png")}  alt="OSK logo" height="75" width="75" />
      </div>
    );
  }
}

export default Header;
