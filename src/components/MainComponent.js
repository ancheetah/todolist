import React, {Component} from "react";
import ToDoList from './ToDoListComponent';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>To Do List</h1>
                <ToDoList />
            </div>
        );
    }
}

export default Main;