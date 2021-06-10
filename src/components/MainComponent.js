import React, {Component, useState, useEffect} from "react";
import ToDoForm from './ToDoFormComponent';
import ToDoItems from './ToDoItemsComponent';
import { Container, Row, Col } from 'react-bootstrap';

// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pendingItem: "",
//             items: []
//         }
//         this.addItem = this.addItem.bind(this);
//         this.removeItem = this.removeItem.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
function Main() {

    const [userInput, updateInput] = useState([]);

    handleChange(event) {
        this.setState({ pendingItem: event.target.value });
    }

    addItem(event) {
        event.preventDefault();
        if (this.state.pendingItem) {
            let newItem = {
                text: this.state.pendingItem,
                key: Date.now()
            };
            this.setState({
                pendingItem: "",  // Clear input field for client after adding task
                items: [...this.state.items, newItem]
            });
        }
    }

    removeItem(key) {
        let filteredItems = this.state.items.filter( item => item.key !== key );
        this.setState({ items: filteredItems });
    }

        return (
            <Container fluid className="main-wrapper">
                <Row>
                    <Col xs={10} md={6} className="content-wrapper mx-auto bg-light">
                        <h1 className="text-center">To Do List</h1>
                        <ToDoForm addItem={this.addItem} userInput={this.state.pendingItem} handleChange={this.handleChange}/>
                        <ToDoItems entries={this.state.items} delete={this.removeItem}/>
                    </Col>
                </Row>
            </Container>
        );
}

export default Main;