import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classes from "./list.module.css";
import { fetchTasks, taskDeleted, taskToggled } from "../business-logic/thunks";
import { selectTasks } from "../business-logic/selectors";
import { useEffect } from "react";

// presentational component

function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleSpanClick = (id) => dispatch(taskToggled(id));

  const handleButtonClick = (id) => dispatch(taskDeleted(id));

  return (
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
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onSpanClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

List.defaultProps = {
  tasks: [],
  onSpanClick: () => {},
  onButtonClick: () => {},
};

export default List;
