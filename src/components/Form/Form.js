import { View, Text, TextInput, Switch, Button, Keyboard } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Form(props) {

    const [taskDescription, setTaskDescription] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    // const handleDescriptionChange = (value) => {
    //     setTaskDescription(value)

    // }
    const handleAddPress = () => {
        if (taskDescription) {
            props.onAddTask(taskDescription, taskDone);


            setTaskDescription('');
            setTaskDone(false);
            setErrorMessage('');
            Keyboard.dismiss();
        }
        else {
            setErrorMessage('The description is required.');
        }
    }



    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter the task description"
                maxLength={140}
                defaultValue={taskDescription}
                onChangeText={setTaskDescription}
            />
            {errorMessage && (
                <View>
                    <Text>Attention: {errorMessage}</Text>
                </View>
            )}
            <View>
                <Text>Completed:</Text>
                <Switch
                    value={taskDone}
                    onValueChange={setTaskDone} />
            </View>

            <Button title='Add' onPress={handleAddPress} />
        </View>
    )


}