import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
       const fetchAllApplicants = async () => {
        try {
           const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{
            withCredentials:true
           });
           if(res.data.success){
              dispatch(setAllApplicants(res.data.job));
           }
        } catch (error) {
             console.log(error);
        }
       }
       fetchAllApplicants();
    }
,[0]);
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold text-xl my-5'>Applicants (3)</h1>
        <ApplicantsTable/>

        </div>
    </div>
  )
}

export default Applicants