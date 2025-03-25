// Root Component of the App!

// Import Statements to utilize components provided by default through Expo and React Native packages
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// Default functional Component that will render our App! This simple function returns JSX code that will be
//-compiled into native Javascript.
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View id='viewGoalInput' style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal'  style={styles.TextInput}/>
        <Button title='Add Goal' />
      </View>
      <View id='viewGoalsContainer' style={styles.goalsContainer}>
        <Text>List of goals...</Text>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 12,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
    alignItems: 'center'
  }
});
