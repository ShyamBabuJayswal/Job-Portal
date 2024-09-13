import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import CompaniesTable from './CompaniesTable'

const Companies = () => {
  return (
    <div>
         <Navbar/>
         <div className='max-w-6xl mx-auto my-10'>
         <div className='flex items-center justify-between my-5'>
         <Input 
                className='w-fit'
                placeholder='Filter by name'
            />
            <Button>New Company</Button>
         </div>
          <CompaniesTable/> 
            
         </div>
    </div>
  )
}

export default Companies