import { createSlice } from "@reduxjs/toolkit";

const UserData = createSlice({
    name: 'userData',
    initialState: {
        userData: {}
    },
    reducers: {
        setUser: (state, action) => {
          state.userData = action.payload;
        },
        updateUserField: (state, action) => {
          const { field, value } = action.payload;
          state.userData[field] = value;
        }
    },
})

export const { setUser, updateUserField } = UserData.actions;
export default UserData.reducer;
