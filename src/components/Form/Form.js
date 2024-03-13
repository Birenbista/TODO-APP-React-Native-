import { View, Text, TextInput, Switch, Button, Keyboard, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import * as database from '../../database';


export default function Form() {
    const dispatch = useDispatch()

    const [taskDescription, setTaskDescription] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [savingData, setSavingData] = useState(false)

    const handleAddPress = async () => {
        if (taskDescription) {

            const data = {
                taskDescription,
                done: taskDone
            }

            setSavingData(true)
            const id = await database.save(data)
            setSavingData(false)

            if (id) {

                data.id = id
                console.log("saved data", data)
                dispatch(addTask(data))

                setTaskDescription('');
                setTaskDone(false);
                setErrorMessage('');
                Keyboard.dismiss();

            }
            else {
                setErrorMessage('Error on save. Try again later');
            }
        } else {
            setErrorMessage('The description is required.');
        }

    }
    if (savingData) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#adbaa6' />
                <Text style={styles.loadingText}>Adding data!</Text>
                <Text style={styles.loadingText}>Please wait!</Text>
            </View>

        );
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter the task description"
                maxLength={140}
                defaultValue={taskDescription}
                onChangeText={setTaskDescription}
            />
            {errorMessage && (
                <View>
                    <Text style={styles.errorMessage}>Attention: {errorMessage}</Text>
                </View>
            )}
            <View style={styles.switchContainer}>
                <Text>Completed:</Text>
                <Switch
                    value={taskDone}
                    onValueChange={setTaskDone} />
            </View>

            <Button title='Add' onPress={handleAddPress} />
        </View>
    )
}