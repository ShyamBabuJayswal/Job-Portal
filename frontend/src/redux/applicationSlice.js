import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    applicants: [],
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setAllApplicants: (state, action) => {
            state.applicants = action.payload;
        },
    },
});

export const { setAllApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;
