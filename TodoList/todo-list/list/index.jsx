import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

function List({ tasks, onSpanClick, onButtonClick }) {
  return (
    <ScrollView>
      {tasks.map(({ id, text, completed }) => (
        <View key={id} style={styles.task}>
          <Text
            style={completed ? styles.isCompleted : null}
            onPress={() => onSpanClick(id)}
          >
            {text}
          </Text>
          <Button title="x" color="#d3d3d3" onPress={() => onButtonClick(id)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  isCompleted: {
    textDecorationLine: "line-through",
  },
});

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onSpanClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

List.defaultProps = {
  tasks: [],
  onSpanClick: () => {},
  onButtonClick: () => {},
};

export default List;
