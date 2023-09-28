import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { fetchTasks, createTask, deleteTask, updateTask } from "./service/api";

import Form from "./form";
import List from "./list";

const DEFAULT_TASKS = [];

function App({ who }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  // useEffect(() => {
  //   doIt();

  //   async function doIt() {
  //     const tasks = await fetchTasks();
  //     setTasks(tasks);
  //   }
  // }, []);

  const handleSubmit = async (text) => {
    const createdTask = await createTask({ text });
    setTasks((tasks) => [...tasks, createdTask]);
  };

  const handleSpanClick = async (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = await updateTask(id, { completed: !task.completed });
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const handleButtonClick = async (id) => {
    await deleteTask(id);
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{who}&rsquo;s Todo List</h1>
      <Form onSubmit={handleSubmit} />
      <List
        tasks={tasks}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
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
