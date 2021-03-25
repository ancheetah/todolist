import React, {Component} from "react";
import ToDoForm from './ToDoFormComponent';
import ToDoItems from './ToDoItemsComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    addItem(event) {
        event.preventDefault();
        if (this.state.input) {
            let newItem = {
                text: this.state.input,
                key: Date.now()
            };
            this.setState({items: [...this.state.items, newItem]});
        }
    }

    removeItem(key) {
        let filteredItems = this.state.items.filter( item => item.key !== key );
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="container">
                <h2>To Do List</h2>
                <ToDoForm addItem={this.addItem} userInput={this.state.input} handleChange={this.handleChange}/>
                <ToDoItems entries={this.state.items} delete={this.removeItem}/>
            </div>
        );
    }
}

export default Main;