import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Grid, Row, Col, Button } from 'react-bootstrap';
import { addItemCart } from '../actions';
import '../css/AllFood.css';

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

class AllFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: 0,
    }
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
        <Col xs={6} md={4} sm={6}
          onMouseOut={() => this.setState({ showCartButton: false })}
          onMouseOver={() => this.setState({ showCartButton: true, clickedId: i })}>
          <div className='listItem'>
            <Link to="/food" className='linkColor'>
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
                <Button bsStyle="danger" className='addCartButton' onClick={(e) => { e.preventDefault(); this.props.addItemCart(d); }}>ADD TO CART</Button>
              </div>
            </Link>
          </div>
        </Col>
      );
    });
  }

  render () {
    return (
      <div id='allFood' className='bodyContainer' style={{ display: 'flex' }}>
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
    )
  }
}
export default connect(null, { addItemCart })(AllFood)
