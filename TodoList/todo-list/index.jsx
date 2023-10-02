import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import Form from "./form";
import List from "./list";

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

  const handleSubmit = (text) =>
    setTasks((tasks) => {
      const maxId = tasks.length
        ? tasks[tasks.length - LAST_ITEM].id
        : LOWEST_ID;
      return [...tasks, { id: maxId + NEXT_ID, text }];
    });

  const handleSpanClick = (id) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const handleButtonClick = (id) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{who}&rsquo;s Todo List</Text>
      <Form onSubmit={handleSubmit} />
      <List
        tasks={tasks}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    padding: 12,
    paddingTop: 20,
    paddingBottom: 0,
  },
});

App.propTypes = {
  who: PropTypes.string.isRequired,
};

App.defaultProps = {
  who: "world",
};

export default App;
