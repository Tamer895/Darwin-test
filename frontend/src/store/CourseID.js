import { createSlice } from "@reduxjs/toolkit";

const CourseID = createSlice({
    name: 'courseId',
    initialState: {
        courseData: {}
    },
    reducers: {
        setCourse: (state, action) => {
          state.courseData = action.payload;
        },
        updateCourseField: (state, action) => {
          const { field, value } = action.payload;
          state.course[field] = value;
        }
    },
})

export const { setCourse, updateCourseField } = CourseID.actions;
export default CourseID.reducer;