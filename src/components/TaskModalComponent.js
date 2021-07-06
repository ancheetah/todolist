import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const TaskModal = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    return (
        <Modal show={show}>
            <Modal.Body>
                <p>Hello World</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={toggle}>
                    Close
                </Button>
                {/* <Button variant='primary' onClick={handleChange}>
                    Save Changes
                </Button> */}
            </Modal.Footer>
        </Modal>
    );
};

export default TaskModal;
