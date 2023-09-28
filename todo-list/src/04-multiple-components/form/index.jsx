/* eslint-disable react-refresh/only-export-components */
import { memo, useState } from "react";
import PropTypes from "prop-types";

// container component + presentational component

function Form({ onSubmit }) {
  console.log("form render");
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    onSubmit(text);
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

export default memo(Form);
