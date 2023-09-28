import { useState } from "react";

// custom hook

export function useForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    onSubmit(text);
  };

  return { text, handleChange, handleSubmit };
}
