import React from 'react';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

const ToDoItems = (props) => {
        if (props.entries.length > 0) {
            return (
                <ListGroup>
                    <ListGroupItem className="text-left list-unstyled bg-light text-secondary">
                        {props.entries.map( item => {
                            return (
                                <Row className="px-2 py-1">
                                    <Col>
                                        <li key={item.key}>{item.text}</li>
                                    </Col>
                                    <Col xs="1">
                                        <i className="fa fa-lg fa-times" onClick={ () => props.delete(item.key)}></i>
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
};

export default ToDoItems;