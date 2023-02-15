import {StyleSheet, Text, View,
  Button, TextInput, ScrollView,FlatList} from 'react-native';
import {useState} from "react";

export default function App() {

  //states for entered text and list of goals
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  //handler for input of the goal
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  //handler for adding the goal to the list
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}]);
  }

  //handler for deleting goals from the list
  function deleteGoalHandler() {
    setCourseGoals((currentCourseGoals) => currentCourseGoals.slice(0,-1));
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
                   placeholder='Your monthly Goals!'
                   onChangeText={goalInputHandler}/>
        <Button title="Add goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Button title="Delete Goal" onPress={deleteGoalHandler}/>
        <FlatList data={courseGoals}
                  renderItem={ (itemData) =>{
                  return (
                      <View style={styles.goalItem}>
                        <Text style={styles.goalText}>{itemData.item.text}</Text>
                      </View>
                  )}
                  }/>
      </View>
    </View>
  );
}

//Styling components
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 70,
    paddingHorizontal: 16,
    backgroundColor: '#2F3742'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '70%',
    marginRight: 8,
    padding: 8,
    color: 'white',
    borderRadius: 15
  },
  //
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#8E43F0'
  },
  goalText: {
    color: 'white'
  }

});
