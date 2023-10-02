import { useState } from "react";
import PropTypes from "prop-types";

import FormComponent from "./form";

function Form({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (value) => setText(value);

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
