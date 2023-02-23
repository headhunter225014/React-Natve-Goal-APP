import {StyleSheet, View,
  Button, TextInput, FlatList, Text} from 'react-native';
import {useEffect, useState} from "react";
import goalItem from "./components/GoalItem";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";
export default function App() {

  //states for entered text and list of goals
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisibile] = useState(false);
  const [firstGoal, setFirstGoal] = useState(false);

  useEffect(() => {
    firstGoalEmpty();
  }, [courseGoals]);

  function startAddGoalHandler () {
    setModalVisibile(true);
  }

  function firstGoalEmpty () {
    if (courseGoals.length > 0){
      setFirstGoal(true);
    }
    else {
      setFirstGoal(false);
    }
  }

  function endAddGoalHandler () {
    setModalVisibile(false);
  }

  //handler for adding the goal to the list
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
        [...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  }

  //handler for deleting goals from the list
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#8E43F0" onPress={startAddGoalHandler}/>
        {modalIsVisible &&
            <GoalInput onAddGoal={addGoalHandler}
                       onCancel={endAddGoalHandler}
                        visible={modalIsVisible}/>}
        <View style={styles.goalsContainer}>
        {!firstGoal &&
          <View >
            <Text style={styles.firstGoalCreate}>Looks like you don't have any goals yet. Let's go ahead and create one.</Text>
          </View>}
        {firstGoal &&
              <FlatList
                  data={courseGoals}
                  renderItem={ (itemData) =>{
                    return <GoalItem text={itemData.item.text}
                                     id={itemData.item.id}
                                     onDeleteItem={deleteGoalHandler}/>;
                  }}
              />
        }
        </View>
      </View>
    </>
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
  goalsContainer: {
    flex: 4
  },
  firstGoalCreate: {
    fontSize: 16,
    color: "#f31282",
    textAlign: "center",
    marginTop: 20,
  }
});
