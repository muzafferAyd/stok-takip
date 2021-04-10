import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "" , products: [], cart:[]};

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  addToCart = (product) => {
    let newCart = this.state.cart;

    var addedItem = newCart.find(c=>c.product.id===product.id);
    if (addedItem){
      addedItem.quantity+=1;
    }
    else{
     newCart.push({product:product,quantity:1});     
    }

    this.setState({cart:newCart});
  };

  removeFromCart = (product) =>{
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
  }


  getProducts = (categoryId) =>{

    let url = "http://localhost:3000/products"
    if (categoryId) {
      url+="?categoryId="+categoryId;
    }
    fetch(url)
     .then(response=>response.json())
     .then(urun=>this.setState({products:urun}))
  }

//   getProducts = () =>{
//     fetch("http://localhost:3000/products")
//     .then(response=>response.json())
//     .then(urun=>this.setState({products:urun}))
// }

componentDidMount(){
  this.getProducts();
}

  render() {
    let infoCategory = { title: "Category List" };
    let infoProduct = { title: "Product List" };
    return (
      <div>
        <Container>
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={infoCategory}
              />
            </Col>
            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={infoProduct}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
