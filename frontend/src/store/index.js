import { configureStore } from "@reduxjs/toolkit";
import CourseID from "./CourseID";
import CurrentLesson from "./CurrentLesson";
import LessonID from "./LessonID";

export default configureStore({
    reducer: {
        courseID: CourseID,
        currentLesson: CurrentLesson,
        lessonID: LessonID,
    }
});