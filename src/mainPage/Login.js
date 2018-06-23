import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Grid, Row, Col, Button } from 'react-bootstrap';
import { addItemCart } from '../actions';
const Arr = [
  {
    name: 'Food item Name',
    veg: true,
    pic: '',
    description: 'This is description of this food item This is description of this food item This is description of this food item',
    price: 155.20,
    ordered: 255,
    type: 'A-LA-CARTE'
  },
  {
    name: 'Food item Name',
    veg: false,
    pic: '',
    description: 'This is description of this food item',
    price: 90.17,
    ordered: 255,
    type: 'A-LA-CARTE'
  },
  {
    name: 'Food item Name',
    veg: true,
    pic: '',
    description: 'This is description of this food item',
    price: 125.89,
    ordered: 255,
    type: 'A-LA-CARTE'
  },
  {
    name: 'Food item Name',
    veg: true,
    pic: '',
    description: 'This is description of this food item',
    price: 192.52,
    ordered: 255,
    type: 'A-LA-CARTE'
  },
  {
    name: 'Food item Name',
    veg: true,
    pic: '',
    description: 'This is description of this food item',
    price: 195.63,
    ordered: 255,
    type: 'MEAL'
  }
];
const settings = {
      infinite: true,
      speed: 500,
      accessibility: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      loginOpen: false,
      showCartButton: false,
      clickedId: 0
    };
  }

  login = () => {
    this.setState({ redirectToReferrer: true });
  };

  toggleLoginPanel(loginOpen) {
    this.setState({
      loginOpen: !loginOpen
    });
  }

  textTruncate(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  renderList() {
    return Arr.map((d, i) => {
      return (
        <Col xs={6} md={4} sm={6} className='listItem'
          onMouseOut={() => this.setState({ showCartButton: false })}
          onMouseOver={() => this.setState({ showCartButton: true, clickedId: i })}>
          <Link to="/food">
          <img
            className='listItemImg'
            src={"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"}  alt="OSK logo" width="300" />
          <h5 className='foodName'>{d.name}</h5>
          <p>{this.textTruncate(d.description, 45)}</p>
          <ul className='listItemPricePanel'>
            <li>
              <span className='vegIndicator' style={{ backgroundColor: d.veg ? 'green' : 'red'}}></span>
            </li>
            <li>{d.type}</li>
            <li>Rs. {d.price}</li>
          </ul>
          <div className='addCartContainer' style={{ opacity: i === this.state.clickedId && this.state.showCartButton ? 1 : 0 }}>
            <Button bsStyle="danger" className='addCartButton' onClick={() => this.props.addItemCart(d)}>ADD TO CART</Button>
          </div>
          </Link>
        </Col>
      );
    });
  }

  toggleRegister() {
    this.setState({
      loginText: true,
    });
  }

  renderLoginOrHomePage() {
    if(this.state.redirectToReferrer) {
      return <HomePage />
    }
    return (
      <div>
        <div id="overlay-sidebar-root">
          <div>
            <div className='loginPanelTransition'>
                <div className="loginPanel" style={{ left: 'auto', right: 0, transform: this.state.loginOpen ? 'translate(0% , 0)' : 'translate(100% , 0)' }}>
                  <div>
                    <div>
                      <div style={{paddingLeft: 40, paddingRight: 43, width: 445, paddingTop: 30 }}>

                          <span className="icon-close" onClick={() => this.toggleLoginPanel(this.state.loginOpen)}>
                            <i className='fa fa-times-circle' style={{ fontSize: 25 }}/>
                          </span>
                          <div className="" style={{ height: 130, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <div className="loginHeader">Login</div>
                              <div className=""></div>
                              <div className="">or <a className="createOrLogin" onClick={() => this.toggleRegister()}>create an account</a></div>
                            </div>
                            <img src={require("../assets/images/logoBackTrans.png")} width="100" height="105" alt=""/>
                          </div>
                        <form>
                          <div>
                            <div>
                              <input type="tel"
                                value={this.state.mobileNum}
                                onChange={(val) => this.setState({ mobileNum: val.target.value })}
                                className="inputContainer" name="mobile" id="mobile" tabindex="1" autocomplete="off" />

                              <label for="mobile">Phone number</label>
                            </div>
                            <div>
                              <input type="password"
                                value={this.state.password} onChange={(val) => this.setState({ password: val.target.value })}
                                className="inputContainer" name="password" id="password" tabindex="2" autocomplete="off" />
                              <label for="password">Password</label>
                            </div>
                            <div className="forgotPassword">Forgot?</div>
                          </div>
                          <div>
                            <a className="loginButton"><input type="submit" style={{ display: 'none' }} />Login</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div  style={{ display: this.state.loginOpen ? 'block' : 'none' }} className='overlay' />
        <div className='layoutContainer'>
          <div className='transparentLayout'>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ display: 'flex' }}>
                <span onClick={() => this.toggleLoginPanel(this.state.loginOpen)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                 <svg className="_1GTCc undefined" viewBox="6 0 12 24" height="30" width="30" fill="#fff">
                   <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path>
                 </svg>
                   <span style={{ fontSize: 20, color: 'white', marginHorizontal: 15 }}>
                    Login
                  </span>
                </span>
                <Button style={{ marginLeft: 20 }}>Create an account</Button>
              </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <img src={require("../assets/images/logoBackTrans.png")}  alt="OSK logo" height="150" width="150" />
              <h3 style={{ color: 'white' }}>The best food from best restaurant at your doorstep in Guwahati</h3>
              <div style={{ display: 'flex' }}>
                <input type="text" className="inputContainer"
                  style={{ width: 380, marginRight: 10, marginTop: 0 }}
                  placeholder="search Area"
                  onChange={(val) => this.setState({ mobileNum: val.target.value })}
                />
                <Button bsStyle="danger">Search</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='bodyContainer' style={{ display: 'flex' }}>
          <div style={{ position: 'relative', width: 300, marginRight: 40 }}>
            <div style={{ height: 0, width: 300, position: 'sticky', top: 15, marginTop: 15 }}>
              <ul className='listItemUl'>
                <li className='activeList'>
                  <i className='fa fa-home' />
                  <span> All</span>
                </li>
                <li className=''>
                  <i className='fa fa-home' />
                  <span> Meals</span>
                </li>
                <li className=''>
                  <i className='fa fa-home' />
                  <span> Vegetarian Option</span>
                </li>
                <li className=''>
                  <i className='fa fa-home' />
                  <span> Non-Veg</span>
                </li>
                <li>
                  <img src={require("../assets/images/Food-Pizza-icon.png")}  alt="OSK" height="35" width="35" />
                  <span> A-LA-CARTE</span>
                </li>
                <li>
                  <img src={require("../assets/images/CloudyNight.png")}  alt="OSK" height="65" width="65" />
                  <span> Late Night</span>
                </li>
                <li>
                  <img src={require("../assets/images/salad-icon.png")}  alt="OSK" height="65" width="65" />
                  <span> Diet Meal</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Grid bsClass='listContainer'>

                <Row className="show-grid">
                  {this.renderList()}
                </Row>

            </Grid>
          </div>
        </div>

      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderLoginOrHomePage()}
      </div>
    )
  }
}

export default connect(null, { addItemCart })(Login);
