import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const authLoginAction = createAsyncThunk(
    "Auth/login",
    async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        return await response.json();
    }
)

const authLoginSlice = createSlice({
    name:'authLogin',
    initialState:{
        detail:[],
        loading:true,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(authLoginAction.pending,(state)=>{
                    state.loading = true;
                    state.error = null; // Reset error on new request
        }),
        builder.addCase(authLoginAction.fulfilled, (state,action) =>{
                    state.loading = false;
                    state.detail = action.payload; // Store the fetched data
        }),
        builder.addCase(authLoginAction.rejected, (state, action) =>{
                    state.error = action.payload.message
        })
    }

})

export default authLoginSlice.reducer;