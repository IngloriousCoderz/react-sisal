import PropTypes from "prop-types";
import classes from "./app.module.css";
import { useState } from "react";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function App({ who }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleButtonClick = (index) => {
    // clone
    // const clone = [...tasks];
    // clone.splice(index, 1);
    // setTasks(clone);

    // sandwich
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <>
      <h1>{who}&rsquo;s Todo List</h1>
      <form>
        <input autoFocus placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, completed }, index) => (
          <li key={id}>
            <span className={completed ? classes.isCompleted : null}>
              {text}
            </span>
            &nbsp;
            <button onClick={() => handleButtonClick(index)}>x</button>
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
