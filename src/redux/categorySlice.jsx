import { createSlice } from "@reduxjs/toolkit";
 
const initialState ={
    categories : []
}

export const categorySlice = createSlice({
    name : "categorySlice",
    initialState,
    reducers : {
     setCategories : (state,action) =>{
        state.categories = action.payload
       console.log("setCategories reducer fonk. çağırıldı", action)
     }
    }
})

export const { setCategories }= categorySlice.actions
export default categorySlice.reducer