import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native"
import { useState } from "react";

// Goal Input with onAddGoal Prop to pass addGoalHandler function from App Component
function GoalInput({onAddGoal, visible, onCancel}) {

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
        <Modal visible={visible} animationType="fade" presentationStyle="overFullScreen" transparent>
            <View id="viewGoalInput" style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} alt="goal" style={styles.image} />
                <TextInput
                    placeholder="Your Course Goal"
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    value={enteredGoalText} // Bind the value of the Input to the entered Text, so we can clear it
                />   
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} />
                    </View>
                </View> 
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        marginRight: 12,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 150,
        height: 150,
        margin: 20,
        backgroundColor: '#311b6b',
        borderRadius: 18,
        color: '#111111'
    }
});
