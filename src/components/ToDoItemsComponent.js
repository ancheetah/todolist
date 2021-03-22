import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ToDoItems extends Component {
    // createTask(item) {
    //     return <li key={item.key}>{item.text}</li>
    // }

    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    {this.props.entries.map( item => {
                        return <li key={item.key}>{item.text}</li>
                    })}
                </ListGroupItem>
            </ListGroup>
        );
    }
};

export default ToDoItems;