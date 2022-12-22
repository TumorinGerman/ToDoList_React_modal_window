import React, { useState } from "react";
import { useImmer } from "use-immer";
import getModal from "./modals/index.js";
import { Button } from "react-bootstrap";

const renderTasks = ({ id, taskText }) => {
  return (
    <div key={id}>
      <span className="mr-3">{taskText}</span>
      <Button
        type="button"
        className="border-0 btn btn-link mr-3 text-decoration-none"
        data-testid="item-rename"
      >
        rename
      </Button>
      <Button
        type="button"
        className="border-0 btn btn-link text-decoration-none"
        data-testid="item-remove"
      >
        remove
      </Button>
    </div>
  );
};

const App = () => {
  const [isActiveAddForm, setAddFormState] = useState(false);
  const [tasks, addTask] = useState([]);
  const Add = getModal("adding");

  const clickHandle = () => {
    setAddFormState(true);
  };

  return (
    <>
      <div className="mb-3">
        <Button
          onClick={clickHandle}
          variant="dark"
          type="button"
          data-testid="item-add"
          className="btn btn-secondary"
        >
          add new Task
        </Button>
      </div>
      {tasks.length === 0 ? null : (
        <>{tasks.map((task) => renderTasks(task))}</>
      )}
      {isActiveAddForm ? (
        <Add
          tasks={tasks}
          addTask={addTask}
          setAddFormState={setAddFormState}
        />
      ) : null}
    </>
  );
};

export default App;
