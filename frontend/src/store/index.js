import { configureStore } from "@reduxjs/toolkit";
import CourseID from "./CourseID";
import CurrentLesson from "./CurrentLesson";
import Lessons from "./Lessons";
import UserData from "./UserData";
import FullScreen from "./FullScreen";

export default configureStore({
    reducer: {
        courseID: CourseID,
        currentLesson: CurrentLesson,
        lessons: Lessons,
        userData: UserData,
        fullScreen: FullScreen
    }
});