import { configureStore } from "@reduxjs/toolkit";
import CourseID from "./CourseID";
import CurrentLesson from "./CurrentLesson";
import Lessons from "./Lessons";

export default configureStore({
    reducer: {
        courseID: CourseID,
        currentLesson: CurrentLesson,
        lessons: Lessons,
    }
});