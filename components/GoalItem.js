import { StyleSheet, View, Text, Pressable } from "react-native";

// Goal Item with Text, onDeleteGoal, and Id Properties passed from App Component
function GoalItem({ text, onDeleteGoal, id }) {
  return (
    <View style={styles.goalItem}>
      {/*Wrap everything within the Pressable component to make the GoalItem Interactable! */}
      <Pressable 
        onPress={onDeleteGoal.bind(this, id)} 
        android_ripple={styles.androidRipple} // Android Ripple will work on Android but not IOS
        style={({pressed}) => pressed && styles.pressedItemIOS} // Alternative Styling for IOS using Pressed
      > 
        {/* Use the Text prop to passed to our Component to display the Goal Text */}
        <Text style={styles.goalItemText}>{text}</Text> 
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: '#ffffffff',
    fontSize: 20,
    padding: 12,
  },
  androidRipple : { // Used for Android Devices
    color: '#39087a',
  },
  pressedItemIOS: { // Used for IOS Devices
    opacity: 0.5,
  },
});


