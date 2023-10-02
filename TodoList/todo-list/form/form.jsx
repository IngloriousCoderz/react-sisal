import { Button, StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";

function Form({ text, onChange, onSubmit }) {
  return (
    <View>
      <TextInput
        autoFocus
        placeholder="What next?"
        value={text}
        onChangeText={onChange}
        style={styles.input}
      />
      <Button title="Add" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  text: "",
};

export default Form;
