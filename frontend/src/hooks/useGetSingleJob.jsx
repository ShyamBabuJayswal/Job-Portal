import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { JOB_API_END_POINT } from '@/utils/constant';

export const UseGetSingleJob = () => {
    const dispatch = useDispatch();
   useEffect(()=>{
    const fetchSingleJob = async()=>{
     try {
      const res = await axios.get(`${JOB_API_END_POINT}/getalljobs`, { withCredentials: true });
      console.log(res.data);

        if(res.data.success){
            dispatch(setAllJobs(res.data.jobs));
        }
     } catch (error) {
        console.log(error)
     }
     }
     fetchSingleJob();
   } ,[])
}
export default UseGetSingleJob;


