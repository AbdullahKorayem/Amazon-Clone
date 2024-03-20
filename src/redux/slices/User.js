import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firestore/firestore";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const fetchUser = createAsyncThunk(
    "User/UserData",
    async () => {
        try {
            const userUid = sessionStorage.getItem("UserUid");
            if (!userUid) {
                throw new Error("User UID not found in session storage");
            }

            const userRef = doc(db, "Users", userUid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists) {
                return userSnap.data();
            } else {
                throw new Error("User not found in Firestore");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            return Promise.reject(error);
        }
    }
);

const userSlice = createSlice({
    name: "User",
    initialState,

    extraReducers: (builder) => {
        builder
            // .addCase(fetchUser.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
        // .addCase(fetchUser.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message;
        //     state.user = null;
        // });
    },
});

export const initializeUser = () => (dispatch) => {
    const userUid = sessionStorage.getItem("UserUid");
    if (userUid) {
        dispatch(fetchUser());
    }
};

export default userSlice.reducer;
