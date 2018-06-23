import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Header from '../components/Header';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Grid, Row, Col, Button } from 'react-bootstrap';
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
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: true });
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

  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#brand">
              <img src={require("../assets/images/logoBackTrans.png")}  alt="OSK logo" height="70" width="70" />

             </a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">
               Link
             </NavItem>
             <NavItem eventKey={2} href="#">
               Link
             </NavItem>
           </Nav>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">
               <span class="_3yZyp">
                <svg class="_1GTCc undefined" viewBox="6 0 12 24" height="19" width="18" fill="#686b78">
                  <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path>
                </svg>
                <span>Login</span>
               </span>
             </NavItem>
             <NavItem eventKey={2} href="#">
               <span className="iconContainer">
                <svg className="_1GTCc _2MSid" viewBox="-1 0 37 32" height="20" width="20" fill="#686b78">
                <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                </svg>
                <span className='cartValue'>0</span></span>
               <span>Cart</span>
             </NavItem>
           </Nav>
         </Navbar.Collapse>
        </Navbar>
        <div className='bodyContainer'>
          <div>
            <Grid bsClass='' style={{ backgroundColor: 'orange' }}>
              <Row className="show-grid">
                <Col xs={12} md={7} sm={6} className=''>
                <img
                  style={{ minWidth: '100%', height: 'auto' }}
                  className=''
                   src={require("../assets/images/foodPic.jpg")}  alt="OSK logo" width="300" />
                </Col>
                <Col xs={12} md={5} sm={6} className='' style={{ marginTop: 15 }}>
                  <h5 className='foodName'>Food name</h5>
                  <p>No. of times ordered</p>
                  <ul className='listItemPricePanel'>
                    <li>
                      <span className='vegIndicator' style={{ backgroundColor: 'veg' ? 'green' : 'red'}}></span>

                    </li>
                    <li>A-LA-CARTE</li>
                    <li>Rs. 1256</li>
                  </ul>
                  <p>Ingredients</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <select name="quantity" >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                    <Button bsStyle="danger" className='addCartButton'>ADD TO CART</Button>
                  </div>

                </Col>
              </Row>
            </Grid>
            <div style={{ padding: 15 }}>
              <p>
                He went such dare good mr fact. The small own seven saved man age ﻿no offer.
                Suspicion did mrs nor furniture smallness. Scale whole downs often leave not eat.
                An expression reasonably cultivated indulgence mr he surrounded instrument.
                Gentleman eat and consisted are pronounce distrusts.
                Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy.
                Me in resolution pianoforte continuing we. Most my no spot felt by no.
                He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written
                account ferrars moments. Too objection for elsewhere her preferred allowance her.
                Marianne shutters mr steepest to me.
                Up mr ignorant produced distance although is sociable blessing.
                Ham whom call all lain like.
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const sidebarStyles = {
  root: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  },
};

export default HomePage;
