import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


export type InitialStateType = {
    email: string | null
    token: string | null
    id: string | null
    loader: boolean
}
const initialState = {
    email: null,
    token: null,
    id: null,
    loader: false
} as InitialStateType
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.loader = action.payload.loader;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.token = null;
        },
        changeLoader(state, action) {
            state.loader = action.payload.loader;
        }
    }
})
export const {setUser, removeUser, changeLoader} = userSlice.actions;
export default userSlice.reducer

