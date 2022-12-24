import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, Button, Form, FormGroup, FormControl } from 'react-bootstrap';

const Rename = (props) => {
    const inputEl = useRef(null);
    const currTask = props.tasks.filter((task) => task.id === props.activeTaskId);

    useEffect(() => {
        inputEl.current.focus();
    });

    const closeHandle = () => {
        props.setRenameFormState(false);
    };

    const formikRename = useFormik({
        initialValues: {
          renamedTask: currTask[0].taskText,
        },
        onSubmit: values => {
            formikRename.setSubmitting(false);
            const allTasks = props.tasks.map(({id, taskText}) => 
                (id === props.activeTaskId) ? {id, taskText: values.renamedTask} : {id, taskText});
            props.addTask(allTasks);
            props.setRenameFormState(false);
        },
      });
    return (
        <Modal.Dialog>
            <Modal.Header>
                <div className="modal-title h4">Rename</div>
                <Button type="button" className="btn-close" aria-label="Close" onClick={closeHandle}/>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formikRename.handleSubmit}>
                    <FormGroup id="renamedTask">
                        <FormControl
                            id="renamedTask"
                            name="renamedTask" 
                            ref={inputEl}   
                            value={formikRename.values.renamedTask} 
                            onChange={formikRename.handleChange}
                        />
                    </FormGroup>
                    <input className="btn btn-primary" type="submit" value="submit" />
                </Form>
            </Modal.Body>
        </Modal.Dialog>
    );   
};

export default Rename;