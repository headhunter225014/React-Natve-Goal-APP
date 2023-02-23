import {Text, View, StyleSheet, Pressable} from "react-native";
import {} from 'react-native';
function GoalItem(props) {
    return (
        //return a single goal, with entered text and specific styling
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)}
                        android_ripple={{color: "#5b13af"}}
                        style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>

    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 15,
        backgroundColor: '#8E43F0'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});