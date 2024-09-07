import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


function Job({job}) {
    const navigate  = useNavigate();
    
  return (
   
    <div className='p-5 rounded-md shadow-xl bh-white border-gray-2000'>
        <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant='outline' className="rounded-full" size="icon"><Bookmark/></Button>
        </div>
        <div className='flex items-center gap-2 my-2'>
        <Button variant='outline' size='icon'>
            <Avatar>
                <AvatarImage src='https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png'>

                </AvatarImage>
            </Avatar>
        </Button>
        <div>
            <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
        </div>

       <div>
          <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
          <p className='text-sm text-gray-500'>{job?.description}</p>
       </div>
       <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">
             {job?.position}
            </Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">
            {job?.jobType}
            </Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">
            {job?.salary}
            </Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        
        <Button className='bg-[#7209b7]'>Save For Later</Button>
        </div>
    </div>
  )
}

export default Job