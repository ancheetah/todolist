import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ToDoItems extends Component {
    render() {
        if (this.props.entries.length > 0) {
            return (
                <ListGroup>
                    <ListGroupItem className="text-left list-unstyled bg-light">
                        {this.props.entries.map( item => {
                            return <li key={item.key} style={{"padding-top":"0.5em", "padding-bottom":"0.5em"}}>{item.text}</li>
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