import { StyleSheet, View, Text } from "react-native";

// Goal Item with Text prop
function GoalItem({text}) {
  return (
    <View style={styles.goalItem}>
    {/* Use the Text prop to passed to our Component to display the Goal Text */}
      <Text style={styles.goalItemText}>{text}</Text> 
    </View>
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


