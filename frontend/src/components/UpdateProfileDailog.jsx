import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';

function UpdateProfileDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills.map(skill => skill),
    file: user?.profile?.file
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value
    });
  }

  const onChangeImage = event => {
    setInput(prev => ({
      ...prev,
      file: event.target.files[0]  // Only updating 'file', not 'image'
    }));
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.put(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    setOpen(false);
    console.log(input)
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className='grid gap-4 py-4'>
              {/* Fullname Field */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>Name</Label>
                <Input
                  id='name'
                  name='fullname'
                  onChange={changeEventHandler}
                  value={input.fullname}
                  className='col-span-3'
                />
              </div>

              {/* Email Field */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='email' className='text-right'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  onChange={changeEventHandler}
                  value={input.email}
                  className='col-span-3'
                />
              </div>

              {/* Phone Number Field */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='number' className='text-right'>Number</Label>
                <Input
                  id='number'
                  name='phoneNumber'
                  onChange={changeEventHandler}
                  value={input.phoneNumber}
                  className='col-span-3'
                />
              </div>

              {/* Bio Field */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='bio' className='text-right'>Bio</Label>
                <Input
                  id='bio'
                  name='bio'
                  onChange={changeEventHandler}
                  value={input.bio}
                  className='col-span-3'
                />
              </div>

              {/* Skills Field */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='skills' className='text-right'>Skills</Label>
                <Input
                  id='skills'
                  name='skills'
                  onChange={changeEventHandler}
                  value={input.skills}
                  className='col-span-3'
                />
              </div>

              {/* File Field */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='file' className='text-right'>Resume</Label>
                <Input
                  id='file'
                  name='file'
                  type='file'
                  onChange={onChangeImage}
                  accepts='application/pdf'
                  className='col-span-3'
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className='w-full my-2'><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please Wait</Button>
              ) : (
                <Button type="submit" className='w-full my-2'>Update</Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
