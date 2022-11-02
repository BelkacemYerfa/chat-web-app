import {configureStore , createSlice} from '@reduxjs/toolkit' ; 


const toggleSlice = createSlice({
 name : 'toggle' , 
 initialState : {value : {toggleSts : false}} , 
 reducers : {
  changeState : (state , action)=>{
    state.value = action.payload ; 
  }
 }
})


export const {changeState} = toggleSlice.actions ; 
export const store = configureStore({
  reducer : {
    toggle : toggleSlice.reducer
  }
}) ; 
