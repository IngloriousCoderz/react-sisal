/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { useForm } from "./use-form";

// presentational component

function Form({ onSubmit }) {
  const { text, handleChange, handleSubmit } = useForm({ onSubmit });

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
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  text: "",
};

export default Form;
