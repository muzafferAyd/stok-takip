import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CardSummary from "./CartSummary"

export default class Navi extends React.Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen:false
        };
    }
    toggle(){
        this.setState = {
            isOpen: !this.state.isOpen
        };
    }

   render(){
       return(
          <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Stock-App</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Stock-App</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/muzafferAyd">Github</NavLink>
            </NavItem>

            <CardSummary  removeFromCart={this.props.removeFromCart}   cart={this.props.cart}/>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  ); 
   } 
}
