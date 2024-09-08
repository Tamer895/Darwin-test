import { createSlice } from "@reduxjs/toolkit";

const LessonID = createSlice({
    name: 'lessonId',
    initialState: {
        lessonData: {}
    },
    reducers: {
        setLesson: (state, action) => {
          state.courseData = action.payload;
        },
        updateLessonField: (state, action) => {
          const { field, value } = action.payload;
          state.course[field] = value;
        }
    },
})

export const { setLesson, updateLessonField } = LessonID.actions;
export default LessonID.reducer;