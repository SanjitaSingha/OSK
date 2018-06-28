import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Header from '../components/Header';
import '../css/HomePage.css';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Grid, Row, Col, Button } from 'react-bootstrap';

window.onscroll = function() {scrollFunction()};

  // var header = document.getElementById("homeSideUl");
  // var btns = document.getElementsByClassName("homeList");
  // console.log(btns, header);
  //   for(var i = 0; i < btns.length; i++) {
  //     console.log('BUTT', btns[i]);
  //     btns[i].addEventListener("click", function() {
  //       var current = document.getElementsByClassName("homePageActiveList");
  //       console.log(current);
  //       current[0].className = current[0].className.replace(" homePageActiveList", "");
  //       this.className += " homePageActiveList";
  //     });
  //   }


function scrollFunction() {
  var d = document.getElementById("yellowPanel");
  var a = document.getElementById('alarcate-section');
  var s = document.getElementById('floatSearch');
  var y = document.getElementById('yellowPanelInner');

  if(d !== null && a!== null) {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {

        // d.classList.add('positionFixed');
        // console.log('Scrolled Up', d);
        d.style.position = 'fixed';
        d.style.top = 0;
        d.style.left = 0;
        d.style.right = 0;
        a.style.opacity = 0;
        s.style.transform = 'translate3d(0,-43px,0)';
        y.style.marginTop = '20px';
        y.style.marginBottom = '20px';

    } else {
      console.log('Scrolled Down', d);
      d.style.position = 'relative';
      a.style.opacity = 1;
      s.style.transform = 'translate3d(0,20px,0)';
      y.style.marginTop = '40px';
      y.style.marginBottom = '40px';

    }
  }
}

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
    this._handleClick = this._handleClick.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  ComponentDidMount() {
   this._handleClick();
 }

 _handleClick() {
   const acc = this._acc.children;
   for (let i = 0; i < acc.length; i++) {
     let a = acc[i];
     console.log('AA', a, acc);

     a.onclick = () => { a.classList.add("homePageActiveList") };
   }
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

  renderRecommendedList() {
    return Arr.map(d => {
      return (
        <div style={{ width: 250, margin: 20 }}>
          <img
            className='listItemImg img-responsive'
            src={"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"}  alt="OSK logo" />
          <p style={{ display: 'inline-block', fontWeight: 'bold', fontSize: 17 }}>{d.name}</p>
          <span className='vegIndicator' style={{ backgroundColor: d.veg ? 'green' : 'red', marginLeft: 7, marginTop: 25 }}></span>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <p style={{ marginBottom: 0 }}>Rs. <span style={{ fontWeight: 'bold' }}>{d.price}</span></p>

            <Button className='homeSmallAddCartBtn'>ADD</Button>
          </div>
        </div>
      )
    })
  }

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
            <div style={{ position: 'relative', height: 300 }}>
              <Grid bsClass='' id='yellowPanel' style={{ backgroundColor: '#FFD500' }}>
                <Row className="show-grid">
                  <div className='container' id='yellowPanelInner' style={{ padding: 0, margin: 40, transition: 'all .5s' }}>
                    <Col xs={12} md={4} sm={6} className='' style={{ position: 'relative' }}>
                    <img
                      style={{ minWidth: '100%', height: 'auto' }}
                      className=''
                       src={require("../assets/images/foodPic.jpg")}  alt="OSK logo" width="300" />
                    </Col>
                    <Col xs={12} md={4} sm={6} className=''>
                      <h5 className='foodName'>Food name</h5>
                      <ul className='homePagelistItemPricePanel'>
                        <li>
                          <select className='foodQuantitySelection pricePanelBoldText'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>

                          </select>
                          <span className='lightSmallGreyFont'>Quantity</span>
                        </li>
                        <li>
                          <span className='vegIndicator' style={{ backgroundColor: 'veg' ? 'green' : 'red'}}></span>
                          <span className='lightSmallGreyFont'>{'veg' ? 'Veg': 'Non-veg'}</span>

                        </li>
                        <li>
                          <span className='pricePanelBoldText'>Rs. 1256</span>
                          <span className='lightSmallGreyFont'>Price</span>

                        </li>

                      </ul>
                      <div className='noOrderedContainer' id='alarcate-section'>
                        <p className='alacarteText' style={{ backgroundColor: 'red' }}>A-LA-CARTE</p>
                        <p className='noOrderText' style={{ backgroundColor: 'blue' }}>15 times ordered</p>
                      </div>
                      <div className='floatSearchSection' id='floatSearch'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div className="homePageFoodInput">
                            <i className='fa fa-search' />
                            <input type="text"
                              placeholder="search your favourite food"
                              onChange={(val) => this.setState({ mobileNum: val.target.value })}
                            />
                          </div>
                          <div className="homecheckboxWhiteBox">
                            <label class="homePagecheckBoxContainer">Veg
                            <input type="checkbox"

                            />
                            <span className='homePageCheckBox'></span>
                            </label>
                          </div>
                          <Button bsStyle="danger" className='homePageAddCartButton'>ADD TO CART</Button>
                        </div>
                      </div>

                    </Col>
                  </div>
                </Row>
              </Grid>
            </div>

            <div className='container'>
              <div>
                <h4 className='homePageHeading'>Ingredients-</h4>
                <p className='homeMainPara'>Pasta, Chicken, Tomato, Garlic, Bell pepper, Mushroom, Cheese, Olive oil</p>
              </div>

              <div style={{ paddingTop: 15, paddingBottom: 15 }}>
                <h4 className='homePageHeading'>Description-</h4>
                <p className='homeMainPara'>
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

              <div id="allFood" className="bodyContainer" style={{ display: 'flex' }}>
                <div style={{ position: 'relative', width: '215px' }} >
                  <div style={{ height: 0, width: 215, position: 'sticky', top: 185, marginTop: 15 }}>
                    <ul className="homePageListItemUl" id='homeSideUl' ref={a => this._acc = a}
        onClick={this._handleClick}>
                      <li className="homeList homePageActiveList">
                        <a href='#recommended'><span> Recommended</span></a>
                      </li>
                      <li className="homeList">
                        <a href='#meals'><span> Meals</span></a>
                      </li>
                      <li className="homeList">
                        <a href='#veg'><span> Vegetarian Option</span></a>
                      </li>
                      <li className="homeList">
                        <a href='#nonVeg'><span> Non-Veg</span></a>
                      </li>
                      <li className="homeList">
                        <a href='#alacarte'><span> A-LA-CARTE</span></a>
                      </li>
                      <li className="homeList">
                        <a href='#night'><span> Late Night</span></a>
                      </li>
                      <li className="homeList">
                        <a href='#diet'><span> Diet Meal</span></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div style={{ borderLeft: '1px solid gainsboro', padding: '10px 40px' }}>
                  <div id='recommended' className='homeDataListMenu'>
                    <h4 className='homePageHeading'>Recommended Items</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {this.renderRecommendedList()}
                    </div>
                  </div>
                  <div id='meals' className='homeDataListMenu'>
                    <h4 className='homePageHeading'>Meals</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {this.renderRecommendedList()}
                    </div>
                  </div>
                  <div id='veg' className='homeDataListMenu'>
                    <h4 className='homePageHeading'>Vegetarian Option</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {this.renderRecommendedList()}
                    </div>
                  </div>
                  <div id='alacarte' className='homeDataListMenu'>
                    <h4 className='homePageHeading'>A-la-carte</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {this.renderRecommendedList()}
                    </div>
                  </div>
                  <div id='night' className='homeDataListMenu'>
                    <h4 className='homePageHeading'>Late Night Menu</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {this.renderRecommendedList()}
                    </div>
                  </div>
                  <div id='diet' className='homeDataListMenu'>
                    <h4 className='homePageHeading'>Diet Meal</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {this.renderRecommendedList()}
                    </div>
                  </div>
                </div>
                <div style={{ position: 'relative', width: '200px' }} >
                  <div style={{ height: 0, width: 200, position: 'sticky', top: 185, marginTop: 15 }}>
                    <div style={{ padding: '20px 0px'}}>
                      <h1 style={{ marginBottom: 20, opacity: '0.4' }}>Cart Empty</h1>
                      <img style={{ opacity: '0.7' }} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" className="_3mSQq" width='220'/>
                      <p style={{ marginTop: 15, fontSize: 14, color: 'gainsboro'}}>Good food is always cooking! Go ahead, order some yummy items from the menu</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default HomePage;
