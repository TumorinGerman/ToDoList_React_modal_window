import React from 'react';
import { Modal, Button, Form, FormGroup } from 'react-bootstrap';

const Remove = (props) => {

    const closeHandle = () => {
        props.setRemoveFormState(false);
    };

    const clickHandle = (e) => {
        e.preventDefault();
        const allTasks = props.tasks.filter(({id}) => id!==props.activeTaskId);
        props.addTask(allTasks);
        props.setRemoveFormState(false);
    };

    return (
        <Modal.Dialog>
            <Modal.Header>
                <div className="modal-title h4">Remove</div>
                <Button type="button" className="btn-close" aria-label="Close" onClick={closeHandle}/>
            </Modal.Header>
            <Modal.Body> 
                <Form>
                    <FormGroup>
                        <input className="btn btn-danger" type="submit" value="remove" onClick={clickHandle}/>
                    </FormGroup>
                </Form>
            </Modal.Body>
        </Modal.Dialog>
    );
};

export default Remove;