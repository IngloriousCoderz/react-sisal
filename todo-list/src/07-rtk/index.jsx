import { Provider } from "react-redux";
import PropTypes from "prop-types";

import Form from "./form";
import List from "./list";

import { store } from "./business-logic/store";

function App({ who }) {
  return (
    <Provider store={store}>
      <h1>{who}&rsquo;s Todo List</h1>
      <Form />
      <List />
    </Provider>
  );
}

App.propTypes = {
  who: PropTypes.string.isRequired,
};

App.defaultProps = {
  who: "world",
};

export default App;
