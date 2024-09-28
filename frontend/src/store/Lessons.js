import { createSlice } from "@reduxjs/toolkit";

const Lessons = createSlice({
    name: 'lessonId',
    initialState: {
        lessonData: {},  // Массив для хранения данных уроков
    },
    reducers: {
        // Устанавливаем данные урока
        setLesson: (state, action) => {
          state.lessonData = action.payload;
        },
        // Обновляем конкретное поле урока
        updateLessonField: (state, action) => {
          const { field, value, id } = action.payload;
          const lesson = state.lessonData.find(lesson => lesson.id === id);
          if (lesson) {
            lesson[field] = value;  // Обновляем поле конкретного урока
          }
        }
    },
})

export const { setLesson, updateLessonField } = Lessons.actions;
export default Lessons.reducer;
