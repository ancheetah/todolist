import React from 'react';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';

const ToDoItems = (props) => {
        if (props.entries.length > 0) {
            return (
                <ListGroup>
                    {props.entries.map( item => {
                        return (
                            <ListGroup.Item key={item.key} className="text-left list-unstyled bg-primary text-white border-light">
                                <Row className="px-2">
                                    <Col className="d-flex align-items-center">
                                        {item.text}
                                    </Col>
                                    <Col xs={1}>
                                        <Button type="button" variant="outline-light" className="item-button border-0">
                                            <i className="fa fa-lg fa-times" onClick={ () => props.delete(item.key)}></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            );
        } else {
            return <div></div>
        }
};

export default ToDoItems;