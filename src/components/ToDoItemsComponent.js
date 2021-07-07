import React from 'react';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';

const ToDoItems = (props) => {
    if (props.entries.length > 0) {
        return (
            <React.Fragment>
                <ListGroup>
                    {props.entries.map( item => {
                        return (
                            <ListGroup.Item key={item.key} className="text-left list-unstyled bg-primary text-white border-light">
                                    <Row className="px-2">
                                        <Col xs={10} className="d-flex align-items-center">
                                            {item.text}
                                        </Col>
                                        <Col xs={2} className="px-2 d-flex justify-content-end">
                                            <Button type="button" variant="primary text-white" className="item-button">
                                                <i className="fa fa-lg fa-pencil" onClick={() => props.handleEdit(item)}></i>
                                            </Button>
                                            <Button type="button" variant="primary text-white" className="item-button">
                                                <i className="fa fa-lg fa-times" onClick={ () => props.delete(item.key)}></i>
                                            </Button>
                                        </Col>
                                    </Row>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </React.Fragment>
        );
    } else {
        return <div></div>
    }
};

export default ToDoItems;