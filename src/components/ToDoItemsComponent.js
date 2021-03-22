import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

class ToDoItems extends Component {
    render() {
        if (this.props.entries.length > 0) {
            return (
                <ListGroup>
                    <ListGroupItem className="text-left list-unstyled bg-light text-secondary">
                        {this.props.entries.map( item => {
                            return (
                                <Row className="pl-2 py-1">
                                    <Col>
                                        <li key={item.key}>{item.text}</li>
                                    </Col>
                                    <Col xs="1">
                                        <i className="fa fa-lg fa-times" onClick={ () => this.props.delete(item.key)}></i>
                                    </Col>
                                </Row>
                            );
                        })}
                    </ListGroupItem>
                </ListGroup>
            );
        } else {
            return <div></div>
        }
    }
};

export default ToDoItems;