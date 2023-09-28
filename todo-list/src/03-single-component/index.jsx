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
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((tasks) => {
      const maxId = tasks.length
        ? tasks[tasks.length - LAST_ITEM].id
        : LOWEST_ID;
      return [...tasks, { id: maxId + NEXT_ID, text: text }];
    });
    setText("");
  };

  const handleSpanClick = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const handleButtonClick = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <>
      <h1>{who}&rsquo;s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="What next?"
          value={text}
          onChange={handleChange}
        />
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
