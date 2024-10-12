import { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PostJob = () => {
  const [input, setInput] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    location: '',
    jobType: '',
    experience: '',
    position: 0,
    companyId: ''
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { companies } = useSelector(store => store.company);

  // Handle input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle company selection from dropdown
  const selectChangeHandler = (value) => {
    const selectCompany = companies.find((company) => company.name.toLowerCase() === value.toLowerCase());
    if (selectCompany) {
      setInput({ ...input, companyId: selectCompany._id });
    } else {
      console.error("Selected company not found.");
    }
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic validation before submitting
    if (!input.title) {
      toast.error("Title is required.");
      return;
  }
  if (!input.description) {
      toast.error("Description is required.");
      return;
  }
  if (!input.requirements) {
      toast.error("Requirements are required.");
      return;
  }
  if (!input.salary) {
      toast.error("Salary is required.");
      return;
  }
  if (!input.location) {
      toast.error("Location is required.");
      return;
  }
  if (!input.jobType) {
      toast.error("Job type is required.");
      return;
  }
  if (!input.experience) {
      toast.error("Experience level is required.");
      return;
  }
  if (!input.position) {
      toast.error("Number of positions is required.");
      return;
  }
  if (!input.companyId) {
      toast.error("Company must be selected.");
      return;
  }

    try {
      setLoading(true);
      console.log(input); // Log input data to ensure it's correct

      const res = await axios.post(`${JOB_API_END_POINT}/post`, {
        title: input.title,
        description: input.description,
        requirements: input.requirements, 
        salary: Number(input.salary),
        location: input.location,
        jobType: input.jobType,
        experience: Number(input.experience),
        position: Number(input.position),
        companyId: input.companyId
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.log(error.response); // Log the full error response
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center w-screen my-5'>
        <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <Label>Title</Label>
              <Input
                type='text'
                name='title'
                value={input.title}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type='text'
                name='description'
                value={input.description}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>
            <div>
              <Label>Requirement</Label>
              <Input
                type='text'
                name='requirements'
                value={input.requirements}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type='text'
                name='salary'
                value={input.salary}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type='text'
                name='location'
                value={input.location}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type='text'
                name='jobType'
                value={input.jobType}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input
                type='text'
                name='experience'
                value={input.experience}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>
            <div>
              <Label>No of Position</Label>
              <Input
                type='number'
                name='position'
                value={input.position}
                onChange={changeEventHandler}
                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
              />
            </div>

            {/* Company dropdown selection */}
            {companies.length >= 0 && (
              <Select onValueChange={selectChangeHandler}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {companies.map((company) => (
                      <SelectItem value={company.name} key={company._id}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>

          {/* Button for form submission */}
          {loading ? (
            <Button className='w-full my-4'>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait
            </Button>
          ) : (
            <Button type="submit" className='w-full my-2'>Post new job</Button>
          )}

          {/* Message if no companies are available */}
          {companies.length === 0 && (
            <p className='text-xs text-red-600 font-bold text-center my-3'>
              Please register a company first, before posting a job
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJob;
