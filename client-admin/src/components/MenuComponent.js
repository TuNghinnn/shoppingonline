import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import home from './assets/home.png';
import category from './assets/category.png'
import product from './assets/product.png';
import order from './assets/order.png'
import customer from './assets/user.png'
class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
    
      <div className="border-bottom">
        <div className='logo'>
          <img src ={logo} alt='logo'></img>
        </div>
             <div className="float-left">  
        <ul className="menu">
          <li className="menu"><Link to='/admin/home'><img src ={home} alt='home'></img></Link></li>
          <li className="menu"><Link to='/admin/category'><img src ={category} alt='category'></img></Link></li>
          <li className="menu"><Link to='/admin/product'><img src ={product} alt='product'></img></Link></li>
          <li className="menu"><Link to='/admin/order'><img src ={order} alt='order'></img></Link></li>
          <li className="menu"><Link to='/admin/customer'><img src ={customer} alt='customer'></img></Link></li>
        </ul>
      </div>
      <div className="float-right">
          Hello <b>{this.context.username}</b> |
          <button to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</button>
        </div>
        <div className="float-clear" />
        </div>
      
     
      
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;