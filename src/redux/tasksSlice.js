import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                task: action.payload.task,
                status: false
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter(item => item.task !== action.payload.task);
        },
        editTask: (state, action) => {
            state.map(item => {
                if (item.task === action.payload.task) {
                    item.task = action.payload.newTask;
                }
                else item;
            })
        },
        updateStatus: (state, action) => {
            state.map(item => {
                if (item.task === action.payload.task) {
                    item.status = action.payload.status;
                }
                else item;
            })
        }
    }
})

export const { addTask, deleteTask, editTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;