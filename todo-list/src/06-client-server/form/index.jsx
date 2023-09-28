/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import PropTypes from "prop-types";

import FormComponent from "./form";

// container component

function Form({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    onSubmit(text);
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {};

export default Form;
