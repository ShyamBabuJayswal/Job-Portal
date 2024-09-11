import { createSlice } from "@reduxjs/toolkit";
const jobSlice = createSlice({
    name: 'job',
    initialState: {
        allJobs: [],
        singleJob: null, // Initial state
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload; // Update singleJob correctly
        }
    }
});


export const {setAllJobs,setSingleJob} = jobSlice.actions;
export default jobSlice.reducer;