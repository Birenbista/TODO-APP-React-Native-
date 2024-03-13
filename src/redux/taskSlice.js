import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: []

    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            const updatedTasks = [...state.tasks];
            updatedTasks.push(action.payload)

            state.tasks = updatedTasks;

        },
        changeStatus: (state, action) => {
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    task.done = !task.done;
                }
                return task;
            })
            state.tasks = updatedTasks;
        },
        removeTask: (state, action) => {
            const id = action.payload;
            const filteredTasks = state.tasks.filter((task) =>
                task.id !== id
            )
            state.tasks = filteredTasks

        }
    }
});

export const { setTasks, addTask, changeStatus, removeTask } = taskSlice.actions;

export default taskSlice.reducer;