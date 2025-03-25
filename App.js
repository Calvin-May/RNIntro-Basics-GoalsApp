// Root Component of the App!

// Import Statements to utilize components provided by default through Expo and React Native packages
import { useState } from "react"; // Allows us to manage simple state
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Default functional Component that will render our App! This simple function returns JSX code that will be
//-compiled into native Javascript.
export default function App() {
  // Variables to hold User Input and manage state 
  const [courseGoals, setCourseGoals] = useState([]);

  // Function to handle onPress event of button. This Updates the Adds the new Goal to our list of goals
  function addGoalHandler(enteredGoalText) {
    // Update the State of the Course Goals, using the text entered by the user
    //setCourseGoals([...courseGoals, enteredGoalText]);// Not the best way to insert a new item in the array, as our State depends on the previous State of the array
    setCourseGoals((currentCourseGoals) => (
      [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}] // Instead of storing strings, store objects with a Key for FlatList to use
      //[...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}] // Using 'Key' instead of 'id' allows FlatList to automatically reference the key, negating the need of the KeyExtractor Prop
    )); // Best Practice way to update state of an array - Functionally, this appends the new item to the array

    // Same as above, but condensed
    //setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  }
  
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View id="viewGoalsContainer" style={styles.goalsContainer}>
      {/*Use Flatlist it iterate through list of goals and output JSX that displays all of the goals added by the User */}     
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => { //Manually Setting up the Key, using the ID of the CourseGoals[] objects.
          return item.id;
        }}
        renderItem={(listData) => {
          return <GoalItem text={listData.item.text} />
        }}
      />
      </View>
    </View>
  );
}

// Style object that will be used to style our App Component
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  goalsContainer: {
    flex: 6,
  }
});
