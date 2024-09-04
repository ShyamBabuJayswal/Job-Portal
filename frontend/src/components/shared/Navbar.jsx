import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';

import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar,  AvatarImage } from '@radix-ui/react-avatar';
import { LogOut, User2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { useDispatch } from 'react-redux';

function Navbar() {
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();  

 const logoutHandler = async() =>{
  try {
     const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true})
     if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
     }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
 }


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
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-4">
                <div className="flex flex-row items-center gap-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                  </Avatar>
                  <div className="flex flex-col items-center gap-2">
                    <h4 className="font-bold text-center">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      {user?.profile?.bio}
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
                    <Button  onClick={logoutHandler} variant='link'>Logout</Button>
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
