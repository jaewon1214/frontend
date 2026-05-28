import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userTotalGetApi } from "../apis/user.api"

export const fetchUserTotalGet = createAsyncThunk(
    "fetchUserTotalGet",
    async(_, thunkApi) => {
        try{ 
            return await userTotalGetApi() 

        }catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
    }
)



const initialUsers = [
  {id: 1, username: "john", password: "1111"},
  {id: 2, username: "peter", password: "1111"},
  {id: 3, username: "susan", password: "1111"},
  {id: 4, username: "sue", password: "1111"},
]

const initialState = {
  users : initialUsers,
  username : "",
  islogin : false
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
            .addCase(fetchUserTotalGet.fulfilled, (state, action)=>{
                state.users = action.payload
            })
    }
})

export const {Logout, register, Login} = userSlice.actions;
export default userSlice.reducer;