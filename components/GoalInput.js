import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useEffect, useState} from "react";

function GoalInput(props) {
    //create a text state
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [emptyInput, setInput] = useState(false);

    useEffect(() => {
        inputEmpty();
    }, [enteredGoalText]);

    function inputEmpty (){
        if (enteredGoalText == ''){
            setInput(false);
        } else setInput(true);
    }


    // Change inout field to the entered text
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    //Call onAddGoal with entered text as a pros, reset the input label to ""
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible}
                animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goalImage.png')} style={styles.image}/>
                <TextInput style={styles.textInput}
                       placeholder='Your monthly Goals!'
                       onChangeText={goalInputHandler}
                        value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    {!emptyInput && <View style={styles.buttonDisabled}><Button title="Add goal" onPress={addGoalHandler} color="#8E43F0" disabled={true}/></View>}
                    {emptyInput && <View style={styles.button}><Button title="Add goal" onPress={addGoalHandler} color="#8E43F0" disabled={false}/></View>}
                    <View style={styles.button}><Button title="Cancel" onPress={props.onCancel} color="#f31282"/></View>

                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create ({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'black',
        backgroundColor: '#2F3742',
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        marginRight: 8,
        padding: 10,
        color: '#120438',
        borderRadius: 15,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: "40%",
        marginHorizontal: 8,
    },
    buttonDisabled: {
        width: "40%",
        marginHorizontal: 8,
        opacity: 0.5,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});