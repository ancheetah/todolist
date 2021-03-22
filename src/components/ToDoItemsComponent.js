import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ToDoItems extends Component {
    // createTask(item) {
    //     return <li key={item.key}>{item.text}</li>
    // }

    render() {
        if (this.props.entries.length > 0) {
            return (
                <ListGroup>
                    <ListGroupItem>
                        {this.props.entries.map( item => {
                            return <li key={item.key}>{item.text}</li>
                        })}
                    </ListGroupItem>
                </ListGroup>
            );
        } else {
            return <div></div>
        }
    }
};

export default ToDoItems;