import { View, Text, Pressable, Modal, Switch, Alert } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { removeTask } from "../../../redux/taskSlice";
import { changeStatus } from "../../../redux/taskSlice";
import * as database from '../../../database'

export default function Task(props) {
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal)
    }

    const handleStatusChangePress = async () => {
        const updated = await database.update(props.task.id, { done: !(props.task.done) })
        if (updated) {
            const data = {
                id: props.task.id,
                done: !(props.task.done)
            }
            dispatch(changeStatus(data))
        }

    }

    const handleDeletePress = () => {
        Alert.alert(
            'Remove Task',
            'This action will permanently delete this task. This action cannot be undone!', [
            {
                text: 'Confirm',
                onPress: async () => {
                    dispatch(removeTask(props.task.id));
                    const deleted = await database.remove(props.task.id);
                    setShowModal(false);
                }
            },
            {
                text: 'Cancel'
            }
        ]);

    }
    return (
        <>
            <Pressable onPress={handleModalToggle}>
                <View style={styles.container}>
                    <Text style={styles.text}>Id: {props.task.id}</Text>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>{props.task.taskDescription}</Text>
                    <Text style={[styles.text, props.task.done ? styles.completedText : styles.openText]}>Status: {props.task.done ? 'Completed' : 'Open'}</Text>
                </View>

            </Pressable>

            <Modal visible={showModal} animationType="fade" transparent={true}>
                <View style={styles.modalContaier}>
                    <View style={styles.modalBox}>
                        <View style={styles.data}>
                            <View style={styles.closeDelete}>
                                <Pressable onPress={handleModalToggle} style={styles.closeModal}>
                                    <Text style={{ color: 'white' }}>X</Text>
                                </Pressable>
                                <MaterialCommunityIcons.Button name="delete" size={24} color="black" backgroundColor='transparent' onPress={handleDeletePress} >
                                </MaterialCommunityIcons.Button>
                            </View>
                            <View style={styles.main}>
                                <Text style={[styles.text, { fontWeight: 'bold', fontSize: 20 }]}>{props.task.taskDescription}</Text>
                                <Switch style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                    value={props.task.done}
                                    onValueChange={handleStatusChangePress}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

        </>

    )


}