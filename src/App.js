import React, { useState } from "react";
import getModal from "./modals/index.js";
import { Button } from "react-bootstrap";

const renderTasks = (
  { id, taskText },
  setRenameFormState,
  setRemoveFormState,
  setActiveTaskId
) => {
  const renameTaskHandle = () => {
    setActiveTaskId(id);
    setRenameFormState(true);
  };

  const removeTaskHandle = () => {
    setActiveTaskId(id);
    setRemoveFormState(true);
  };

  return (
    <div className="taskContainer" key={id} id={id}>
      <span className="mr-3">{taskText}</span>
      <div className="buttonsContainer">
        <Button variant="primary" onClick={renameTaskHandle}>
          rename
        </Button>
        <Button variant="danger" onClick={removeTaskHandle}>
          remove
        </Button>
      </div>
    </div>
  );
};

const App = () => {
  const [isActiveAddForm, setAddFormState] = useState(false);
  const [isActiveRenameForm, setRenameFormState] = useState(false);
  const [isActiveRemoveForm, setRemoveFormState] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [tasks, addTask] = useState([]);
  const Add = getModal("adding");
  const Rename = getModal("renaming");
  const Remove = getModal("removing");

  const clickAddHandle = () => {
    setAddFormState(true);
  };

  return (
    <>
      <div className="mb-3">
        <Button
          onClick={clickAddHandle}
          variant="dark"
          type="button"
          data-testid="item-add"
          className="btn btn-secondary"
        >
          add new Task
        </Button>
      </div>
      {tasks.length === 0 ? null : (
        <>
          {tasks.map((task) =>
            renderTasks(
              task,
              setRenameFormState,
              setRemoveFormState,
              setActiveTaskId
            )
          )}
        </>
      )}
      {isActiveAddForm ? (
        <Add
          tasks={tasks}
          addTask={addTask}
          setAddFormState={setAddFormState}
        />
      ) : null}
      {isActiveRenameForm ? (
        <Rename
          tasks={tasks}
          addTask={addTask}
          activeTaskId={activeTaskId}
          setRenameFormState={setRenameFormState}
        />
      ) : null}
      {isActiveRemoveForm ? (
        <Remove
          tasks={tasks}
          addTask={addTask}
          activeTaskId={activeTaskId}
          setRemoveFormState={setRemoveFormState}
        />
      ) : null}
    </>
  );
};

export default App;
