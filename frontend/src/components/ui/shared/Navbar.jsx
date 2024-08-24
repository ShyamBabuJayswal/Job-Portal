import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

function Navbar() {
  return (
    <div className='bg-white'>
      <div className='flex items-center mx-auto max-w-6xl h-16 justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-5'>
          <ul className='flex font-medium items-center gap-12'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
            <Avatar className="w-8 h-8 rounded-full cursor-pointer ">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  
</Avatar>

            </PopoverTrigger>
            
            <PopoverContent className="w-48 p-4">
      <div className="flex flex-row items-center gap-2">
       <Avatar className="cursor-pointer">
       <AvatarImage 
       src="https://github.com/shadcn.png" alt="@shadcn" />
    </Avatar>
    <div className="flex flex-col items-center gap-2" >
    <h4 className="font-bold text-center">Shyam Babu Jayswal</h4>
    <p className="text-sm text-muted-foreground text-center"> lorem epsum
    </p>
    </div>
  </div>
</PopoverContent>
</Popover>

        </div>
      </div>
    </div>
  )
}

export default Navbar
