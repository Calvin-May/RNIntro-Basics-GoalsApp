import { StyleSheet, TextInput, View, Button, Modal } from "react-native"
import { useState } from "react";

// Goal Input with onAddGoal Prop to pass addGoalHandler function from App Component
function GoalInput({onAddGoal, visible}) {

    // Variables to hold User Input and manage state 
    const [enteredGoalText, setEnteredGoalText] = useState('');

    // Function to handle keystrokes on the Goal TextInput component
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        
    }

    // Function that uses the onAddGoal prop, passed from App component to add the new Goal Text to the list
    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText(''); // Clear the Entered Text state for data binding with the text input
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View id="viewGoalInput" style={styles.inputContainer}>
                <TextInput
                    placeholder="Your Course Goal"
                    onChangeText={goalInputHandler}
                    style={styles.TextInput}
                    value={enteredGoalText} // Bind the value of the Input to the entered Text, so we can clear it
                />    
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    TextInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 12,
        padding: 8,
    },
});