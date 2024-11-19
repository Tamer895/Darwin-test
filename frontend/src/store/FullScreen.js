import { createSlice } from "@reduxjs/toolkit";

const FullScreen = createSlice({
  name: "fullscreen",
  initialState: {
    lessonFullScreen: false,
    videoFullScreen: false,
  },
  reducers: {
    toggleLessonFullScreen: (state) => {
      state.lessonFullScreen = !state.lessonFullScreen;
    },
    toggleVideoFullScreen: (state) => {
      state.videoFullScreen = !state.videoFullScreen;
    },
    setLessonFullScreen: (state, action) => {
      state.lessonFullScreen = action.payload;
    },
    setVideoFullScreen: (state, action) => {
      state.videoFullScreen = action.payload;
    },
  },
});

export const {
  toggleLessonFullScreen,
  toggleVideoFullScreen,
  setLessonFullScreen,
  setVideoFullScreen,
} = FullScreen.actions;
export default FullScreen.reducer;
