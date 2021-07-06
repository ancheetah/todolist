import React, {useState, useEffect} from 'react';
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
    const [pendingEdit, setPendingEdit] = useState("");

    const toggle = () => setShow(!show);

    const handleEditClick = (key) => {
        let promise = new Promise((resolve, reject) => {
            setItemToEdit(tasks.find( item => item.key === key));
            // setPendingEdit(itemToEdit.text);
            if (pendingEdit) {
                resolve("done");
            }
        })
        promise.then(
            result => console.log(result, pendingEdit)
        )
        .then(
            result => toggle()
        )
    };

    useEffect( () => {
        setPendingEdit(itemToEdit.text);
    }, [itemToEdit])

    const editTask = (event) => {
        event.preventDefault();
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
                                <Form.Label>Edit Task Name</Form.Label>
                                <Form.Control type="text" value={pendingEdit} onChange={event => setPendingEdit(event.target.value)}/>
                            </Form.Group>
                            <p>{pendingEdit}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={toggle}>
                            Close
                        </Button>
                        <Button type="submit" variant='primary' onClick={editTask}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
}

export default Main;