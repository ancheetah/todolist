import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const ToDoForm = (props) => {
    return (
        <Form onSubmit={props.addItem}>
            <InputGroup className="my-3">
                <Form.Control type="text" placeholder="Enter a task" className="border-primary"
                    value={props.userInput} onChange={props.handleChange}/>
                <InputGroup.Append>
                    <Button variant="primary text-white" type="submit">
                        <i className="fa fa-plus"></i>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
}

export default ToDoForm;