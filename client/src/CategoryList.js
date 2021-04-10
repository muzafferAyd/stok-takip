import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

export default class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3> CategoryList </h3>

                <ListGroup>
        <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
      </ListGroup>
            </div>
        )
    }
}
