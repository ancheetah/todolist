import React, {useState} from 'react';
import ToDoForm from './ToDoFormComponent';
import ToDoItems from './ToDoItemsComponent';
// import TaskModal from './TaskModalComponent';
import { Container, Row, Col, Modal, Button, Form} from 'react-bootstrap';

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

    // Modal
    const [show, setShow] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({text: "", key: null});
    const [pendingEdit, setPendingEdit] = useState(null);

    const toggle = () => setShow(!show);

    const handleEditClick = (item) => {
        setItemToEdit(item);
        toggle();
    };

    const editTask = (event) => {
        event.preventDefault();
        if (pendingEdit) {
            setTasks(
                tasks.map( task => {
                    if ((task.key === itemToEdit.key)) {
                        let newTask = pendingEdit;
                        setPendingEdit(null);
                        return {text: newTask, key: task.key};
                    }
                    return task;
                })
            );
        }
        toggle();
    }

    return (
        <Container fluid className="main-wrapper">
            <Row>
                <Col xs={10} md={6} className="content-wrapper mx-auto bg-light">
                    <h1 className="text-center">To Do List</h1>
                    <ToDoForm addTask={addTask} userInput={pendingItem} handleChange={handleChange}/>
                    <ToDoItems entries={tasks} delete={removeTask} handleEdit={handleEditClick}/>
                </Col>
            </Row>
            <Modal show={show}>
                <Form onSubmit={editTask}>
                    <Modal.Body>
                        <Form.Group controlId="formEditTask">
                            <Form.Label>Edit Task</Form.Label>
                            <Form.Control 
                                type="text" 
                                defaultValue={itemToEdit.text} 
                                onChange={event => setPendingEdit(event.target.value)}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={toggle}>
                            Cancel
                        </Button>
                        <Button type="submit" variant='success text-white'>
                            Save Changes
                        </Button>
                        <Button variant='danger' onClick={() => {removeTask(itemToEdit.key); toggle();}}>
                            Delete Task
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
}

export default Main;