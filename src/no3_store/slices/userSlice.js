import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userTotalGetApi } from "../apis/user.api"

export const userTotalGetSlice = createAsyncThunk(
    "userTotalGetSlice",
    async(_, thunkApi) => {
        try{ 
            return await userTotalGetApi() 

        }catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

const initialState = {
  users : [],
  username : "",
  islogin : false,
  loading : false,
  error : null
}

const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers : {
        Login : (state, action) => {
            state.islogin = true,
            state.username = action.payload
        },
        register : (state, action) => {
            state.users = [
                ...state.users,
                {
                    id : action.payload.id,
                    username : action.payload.user.username,
                    password : action.payload.user.password
                }
            ]
        },
        Logout : (state, action) => {
            state.islogin = false,
            state.username = ""
        }        
    },
    extraReducers : (builder) => {
        builder
            .addCase(userTotalGetSlice.pending, (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(userTotalGetSlice.fulfilled, (state, action)=>{
                state.users = action.payload
                state.loading = false
            })
            .addCase(userTotalGetSlice.rejected, (state, action)=>{
                state.loading = false
                state.error = action.payload
            })
    }
})

export const {Logout, register, Login} = userSlice.actions;
export default userSlice.reducer;