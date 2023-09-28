import PropTypes from "prop-types";
import classes from "./app.module.css";
import { useState } from "react";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

const LOWEST_ID = 0;
const LAST_ITEM = 1;
const NEXT_ID = 1;

function App({ who }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleSubmit = (event) => {
    event.preventDefault();

    // clone
    // const clone = [...tasks];
    // clone.push({ id: 4, text: "New task" });
    // setTasks(clone);

    // sandwich
    setTasks((tasks) => {
      const maxId = tasks.length
        ? tasks[tasks.length - LAST_ITEM].id
        : LOWEST_ID;
      return [...tasks, { id: maxId + NEXT_ID, text: "New task" }];
    });
  };

  const handleSpanClick = (id) => {
    // clone
    // const clone = [...tasks];
    // // clone[index].completed = !clone[index].completed;
    // clone[index] = { ...clone[index], completed: !clone[index].completed };
    // setTasks(clone);

    // sandwich
    // setTasks([
    //   ...tasks.slice(0, index),
    //   { ...tasks[index], completed: !tasks[index].completed },
    //   ...tasks.slice(index + 1),
    // ]);

    // array method
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleButtonClick = (id) => {
    // clone
    // const clone = [...tasks];
    // clone.splice(index, 1);
    // setTasks(clone);

    // sandwich
    // setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);

    // array method
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{who}&rsquo;s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              className={completed ? classes.isCompleted : null}
              onClick={() => handleSpanClick(id)}
            >
              {text}
            </span>
            &nbsp;
            <button onClick={() => handleButtonClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

App.propTypes = {
  who: PropTypes.string.isRequired,
};

App.defaultProps = {
  who: "world",
};

export default App;
