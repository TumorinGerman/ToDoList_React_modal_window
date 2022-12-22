import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Rename = () => {
return (
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <div className="modal-title h4">Rename</div>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <form>
        <div className="form-group">
          <input className="form-control" data-testid="input-body" name="body" required="" value="first task!" />
        </div>
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
    </div>
  </div>
</div>
)
}

export default Rename;