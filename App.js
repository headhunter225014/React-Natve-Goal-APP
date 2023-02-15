import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your monthly Goals!'/>
        <Button title="Add goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List Of Goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 70,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 15
  },
  goalsContainer: {
    flex: 4
  }
});
