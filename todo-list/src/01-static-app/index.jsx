import PropTypes from "prop-types";
import classes from "./app.module.css";

function App({ who }) {
  const style = {
    color: who === "world" ? "blue" : "green",
    backgroundColor: "red",
  };

  return (
    <>
      <h1>{who}&rsquo;s Todo List</h1>
      <form>
        <input autoFocus placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        <li>
          <span className={classes.isCompleted} style={style}>
            Learn React
          </span>{" "}
          <button>x</button>
        </li>
        <li>
          <span>Look for a job</span> <button>x</button>
        </li>
        <li>
          <span>Forget everything</span> <button>x</button>
        </li>
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
