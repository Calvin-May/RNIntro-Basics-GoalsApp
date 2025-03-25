import { StyleSheet, View, Text, Pressable } from "react-native";

// Goal Item with Text, onDeleteGoal, and Id Properties passed from App Component
function GoalItem({ text, onDeleteGoal, id }) {
  return (
    // Wrap everything within the Pressable component to make the GoalItem Interactable!
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.goalItem}>
      {/* Use the Text prop to passed to our Component to display the Goal Text */}
        <Text style={styles.goalItemText}>{text}</Text> 
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: '#ffffffff',
    fontSize: 20
  }
});


