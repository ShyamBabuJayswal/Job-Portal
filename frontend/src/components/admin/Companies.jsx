import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { setSearchCompanyByText } from '@/redux/companySlice' 

import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import UseGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Companies = () => {
  UseGetAllCompanies();
  const [input,setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(setSearchCompanyByText(input))  
    },[input]);
  return (
    <div>
         <Navbar/>
         <div className='max-w-6xl mx-auto my-10'>
         <div className='flex items-center justify-between my-5'>
         <Input 
                className='w-fit'
                placeholder='Filter by name'
                onChange = {(e) => setInput(e.target.value)}
            />
            <Button onClick={()=>navigate('/admin/companies/create')

            } >New Company</Button>
         </div>
          <CompaniesTable/> 
            
         </div>
    </div>
  )
}

export default Companies