// Root Component of the App!

// Import Statements to utilize components provided by default through Expo and React Native packages
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// Default functional Component that will render our App! This simple function returns JSX code that will be
//-compiled into native Javascript.
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View id='viewGoalInput'>
        <TextInput placeholder='Your Course Goal' />
        <Button title='Add Goal' />
      </View>
      <View id='viewGoalList'>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

// Style object that will be used to style our App Component
const styles = StyleSheet.create({
  appContainer: {
    padding: 45
  }
});
