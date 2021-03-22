import React, {Component} from "react";
import { Container, Col, Form, Input, Button } from 'reactstrap';
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
                    <Col md={10}>
                        {/* Set up an uncontrolled form for now with innerRef */}
                        <Input type="text" placeholder="Enter a task"
                                innerRef={ (userInput) => this.input = userInput }></Input>   
                    </Col>
                    <Col md={2}>
                        <Button type="submit">Add</Button>
                    </Col>
                </Form>
                <ToDoItems entries={this.state.items}/>
            </Container>
        );
    }
}

export default ToDoList;