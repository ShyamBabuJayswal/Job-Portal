import React from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge, Contact, Mail, Pen } from 'lucide-react';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';

const skills = ["Html", "CSS", "JavaScript", "Java"];

function Profile() {
    const isHaveResume=true;
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-green border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://wallpapers.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <Button className='text-right' variant='outline'><Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>shyambabu_jayswal@yahoo.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>7084721408</span>
          </div>
        </div>
        <div>
          <h1 className='font-medium text-xl'>Skills</h1>
          <div className='flex items-center gap-2 mt-2'>
            {
              skills.map((item, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5 my-5'>
            <Label className='text-md font-bold'>Resume</Label>
  {
    isHaveResume? <a target='blank' href='https://www.google.com' className='text-blue-500 w-full cursor-pointer'>Shyam_Resume</a>:<span>NA</span>
  }
        </div>
       
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1>Applied Jobs</h1>
            <AppliedJobTable/>
        </div>
    </div>
  )
}

export default Profile;
