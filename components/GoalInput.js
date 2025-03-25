import { StyleSheet, TextInput, View, Button } from "react-native"
import { useState } from "react";

function GoalInput({onAddGoal}) {

    // Variables to hold User Input and manage state 
    const [enteredGoalText, setEnteredGoalText] = useState('');

    // Function to handle keystrokes on the Goal TextInput component
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View id="viewGoalInput" style={styles.inputContainer}>
            <TextInput
                placeholder="Your Course Goal"
                onChangeText={goalInputHandler}
                style={styles.TextInput}
                value={enteredGoalText}
            />    
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
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