// Root Component of the App!

// Import Statements to utilize components provided by default through Expo and React Native packages
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Default functional Component that will render our App! This simple function returns JSX code that will be
//-compiled into native Javascript.
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Button title="I am a Button" />
      <StatusBar style="auto" />
    </View>
  );
}

// Style object that will be used to style our App Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16, 
    borderWidth: 1, 
    padding: 5
  }
});
