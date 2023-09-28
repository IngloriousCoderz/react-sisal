/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";

// presentational component

function Form({ text, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        autoFocus
        placeholder="What next?"
        value={text}
        onChange={onChange}
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
