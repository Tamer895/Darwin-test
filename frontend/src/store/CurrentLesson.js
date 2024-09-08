import { createSlice } from "@reduxjs/toolkit";

const CurrentLesson = createSlice({
    name: 'currentLesson',
    initialState: {
        id: 0
    },
    reducers: {
        setCurrentLesson: (state, action) => {
          state.currentLesson = action.payload;
        },
    },
})

export const { setCurrentLesson } = CurrentLesson.actions;
export default CurrentLesson.reducer;