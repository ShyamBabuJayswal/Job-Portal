import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { setSingleCompany } from '@/redux/companySlice';

export const UseGetCompanyById = (companyID) => {
    const dispatch = useDispatch();
   useEffect(()=>{
    const fetchSingleCompany = async()=>{
     try {
      const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyID}`, { withCredentials: true });
      console.log(res.data);

        if(res.data.success){
            dispatch(setSingleCompany(res.data.company));
        }
     } catch (error) {
        console.log(error)
     }
     }
     fetchSingleCompany();
   } ,[companyID])
}

export default UseGetCompanyById;


