import React, {Component} from "react";
import {Button, InputGroup, Input} from 'reactstrap';
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="header">
                    <InputGroup>
                            <Input type="text" name="textField" id="textField" placeholder="Enter a task" />
                            <InputGroupAddon addonType="prepend">
                                <Button type="submit" color="primary">Add</Button>
                            </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        );
    }
}

export default Main;