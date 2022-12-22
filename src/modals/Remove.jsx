import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

const Remove = () => {
return (
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <div className="modal-title h4">Remove</div>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <form>
        <div className="form-group">
          <input className="btn btn-danger" type="submit" value="remove" />
        </div>
      </form>
    </div>
  </div>
</div>
)
}

export default Remove;