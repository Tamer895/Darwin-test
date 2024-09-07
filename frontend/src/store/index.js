import { configureStore } from "@reduxjs/toolkit";
import CourseID from "./CourseID";

export default configureStore({
    reducer: {
        courseID: CourseID
    }
});