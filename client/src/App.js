import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "" , products: []};

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  getProducts = () =>{
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(urun=>this.setState({products:urun}))
}

componentDidMount(){
  this.getProducts();
}

  render() {
    let infoCategory = { title: "Category List" };
    let infoProduct = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
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
