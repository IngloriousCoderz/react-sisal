/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import classes from "./list.module.css";

// presentational component

function List({ tasks, onSpanClick, onButtonClick }) {
  console.log("list render");
  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={completed ? classes.isCompleted : null}
            onClick={() => onSpanClick(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={() => onButtonClick(id)}>x</button>
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
