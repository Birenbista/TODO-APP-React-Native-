import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/Styles/main'
import Header from './src/components/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import uuid from 'react-uuid';
import { useState } from 'react';

export default function App() {
  const [tasks, setTask] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: false
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false
    },

  ])
  const handleAddTask = (taskDescription, taskDone) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      description: taskDescription,
      done: taskDone

    });
    setTask(updatedTasks);
  }


  return (
    <View style={styles.container}>

      <Header />
      <Tasks tasks={tasks} />
      <Form onAddTask={handleAddTask} />
    </View>

  );
}
