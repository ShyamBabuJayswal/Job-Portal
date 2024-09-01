import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { LogOut, User2 } from 'lucide-react';
import { useSelector } from 'react-redux';

function Navbar() {
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();  // React Router's navigate function

  return (
    <div className='bg-white'>
      <div className='flex items-center mx-auto max-w-6xl h-16 justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-[#09b93ed3]'>
            Job<span className='text-[#F83002]'>Portal</span>
          </h1>
        </div>
        <div className='flex items-center gap-5'>
          <ul className='flex font-medium items-center gap-12'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>

          {!user ? (
            <div className='flex items-center gap-2'>
              <Link to='/login'>
                <Button className='bg-[#09b93ed3]' variant='outline'>Login</Button>
              </Link>
              <Link to='/signup'>
                <Button className='bg-[#F83002] hover:bg-[#f70303ef]'>SignUp</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-8 h-8 rounded-full cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-4">
                <div className="flex flex-row items-center gap-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                  <div className="flex flex-col items-center gap-2">
                    <h4 className="font-bold text-center">Shyam Babu Jayswal</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col text-gray-600 mt-2'>
                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                    <User2 />
                    <Button variant='link'>
                      <Link to='/profile'>View Profile</Link>
                    </Button>
                  </div>
                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                    <LogOut />
                    <Button variant='link'>Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
