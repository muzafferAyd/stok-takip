import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import {Link} from "react-router-dom"
export default class CartSummary extends Component {
  renderSummary() {
    
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem 
            onClick = {() =>{this.props.removeFromCart(cartItem.product)}}
            key={cartItem.product.id}>
              <Badge color="danger">X</Badge>
              {cartItem.product.productName}
              <Badge color="success"
              >{cartItem.quantity}</Badge>
              
            </DropdownItem>
            
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to="cart">Go to Cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink> Empty Cart</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
