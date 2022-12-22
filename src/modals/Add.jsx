import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, Button, Form, FormGroup, FormControl } from 'react-bootstrap';

const Add = (props) => {
    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();
    });

    const closeHandle = () => {
        props.setAddFormState(false);
    }

    const formik = useFormik({
        initialValues: {
          task: '',
        },
        onSubmit: values => {
            const [...allTasks] = props.tasks;
            allTasks.push({id: _.uniqueId(), task: values});
            props.addTask(allTasks);
            props.setAddFormState(false);
        },
      });

    return (
        <div
        className="modal show"
        style={{ color: 'grey', display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton onClick={closeHandle}>
                    <div className="modal-title h4">Add Task</div>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup className="mb-3" id="task">
                            <FormControl  ref={inputEl} id="task" placeholder="Enter your task"  value={formik.values.task} onChange={formik.handleChange}/>
                            <Button variant="dark" as="input" type="submit" value="Submit" />{' '}
                        </FormGroup>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default Add;