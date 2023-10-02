import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { textChanged } from "../business-logic/text.slice";
import { taskAdded } from "../business-logic/actions";
import { selectText } from "../business-logic/selectors";

// container component

function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(textChanged(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(taskAdded(text));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        placeholder="What next?"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {};

export default Form;
