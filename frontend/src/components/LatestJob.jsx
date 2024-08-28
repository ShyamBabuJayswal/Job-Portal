import React from 'react'
import LatestJobCart from './LatestJobCart'

const randomJobs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]; 
function LatestJob() {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'>
           <span className='text-[#6A38C2]'>Latest & Top</span>
            Job Openings

        </h1>
        <div className='grid grid-cols-3 gap-4 my-5'>

               {
            randomJobs.slice(0,6).map((item, index) => 
             <LatestJobCart/>
            )


        }
        </div>
    </div>
  )
}

export default LatestJob