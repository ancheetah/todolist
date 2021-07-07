import React, {useState} from 'react';
import { ListGroup, Row, Col, Button, Form } from 'react-bootstrap';

const ToDoItems = (props) => {
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => setEditMode(!editMode);

    const [pendingText, setPendingText] = useState("");

    const editTask = (event, key) => {
        event.preventDefault();

        props.updateTasks( 
            props.entries.map( item => {
                if (item.key === key) {
                    return {text: pendingText, key: key};
                }
                return item;
            })
        );

        toggleEditMode();
    }

    if (props.entries.length > 0) {
        return (
            <React.Fragment>
                <ListGroup>
                    {props.entries.map( item => {
                        return (
                            <ListGroup.Item key={item.key} className="text-left list-unstyled bg-primary text-white border-light">
                                <Row className="px-2">
                                    <Col xs={10} className="d-flex align-items-center">
                                        {
                                            editMode ?
                                                <Form onSubmit={(event) => editTask(event, item.key)}>
                                                    <Form.Control 
                                                        defaultValue={item.text}
                                                        onChange={event => setPendingText(event.target.value)}
                                                    />
                                                    <Button type="submit">Submit</Button>
                                                    <Button type="button" onClick={toggleEditMode}>Cancel</Button>
                                                </Form>
                                                : item.text
                                        }
                                    </Col>
                                    <Col xs={2} className="px-2 d-flex justify-content-end">
                                        <Button type="button" variant="primary text-white" className="item-button">
                                            <i className="fa fa-lg fa-pencil" onClick={toggleEditMode}></i>
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