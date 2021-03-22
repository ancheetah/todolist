import React, {Component} from "react";
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import ToDoItems from './ToDoItemsComponent';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        if (this.input.value) {
            let newItem = {
                text: this.input.value,
                key: Date.now()
            };
            this.setState( (prevState) => ({items: prevState.items.concat(newItem)}));
            this.input.value = "";
        }
        item.preventDefault();
    }

    render () {
        return (
            <Container className="todoListMain">
                <Form onSubmit={this.addItem}>
                    <Row className="">
                        <Col xs="12" sm="10" md="8" className="py-2">
                            {/* Set up an uncontrolled form for now with innerRef */}
                            <Input type="text" placeholder="Enter a task"
                                    innerRef={ (userInput) => this.input = userInput }></Input>
                        </Col>
                        <Col className="d-flex justify-content-start py-2">
                            <Button type="submit" color="primary">Add</Button>
                        </Col>
                    </Row>
                </Form>
                <Col xs="12" sm="10" md="8" >
                    <ToDoItems entries={this.state.items}/>
                </Col>
            </Container>
        );
    }
}

export default ToDoList;