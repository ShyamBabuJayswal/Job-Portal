import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name:'application',
    initialState:{
    applicants:[],
    },
    reducers:{
    setAllApplicants:(state,action)  => {
        state.applicants = action.payload;
    }
    }
})

export const {setAllApplicants} = applicationSlice.action;
export default applicationSlice.reducer;