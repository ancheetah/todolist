import React, {useState} from 'react';
import ToDoForm from './ToDoFormComponent';
import ToDoItems from './ToDoItemsComponent';
import { Container, Row, Col } from 'react-bootstrap';

function Main() {

    const [pendingItem, setPendingItem] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (event) => {
        setPendingItem( event.target.value );
    }
    
    const addTask = (event) => {
        event.preventDefault();
        if (pendingItem) {
            let newTask = {
                text: pendingItem,
                key: Date.now()
            };
            setTasks(currentTasks => [...currentTasks, newTask]);
            setPendingItem(""); // Clear input field for client after adding task
        }
    }

    const removeTask = (key) => {
        let filteredItems = tasks.filter( item => item.key !== key );
        setTasks(filteredItems);
    }

    return (
        <Container fluid className="main-wrapper">
            <Row>
                <Col xs={10} md={6} className="content-wrapper mx-auto bg-light">
                    <h1 className="text-center">To Do List</h1>
                    <ToDoForm addTask={addTask} userInput={pendingItem} handleChange={handleChange}/>
                    <ToDoItems entries={tasks} delete={removeTask} updateTasks={setTasks}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;