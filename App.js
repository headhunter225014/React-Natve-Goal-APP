import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Vero</Text>
      <Text style={styles.dummyText}>Hello Lucatoni</Text>
      <Button title='tap me daddy'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 16,
  }
});
