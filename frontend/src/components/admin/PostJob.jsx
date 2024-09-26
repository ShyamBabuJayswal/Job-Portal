import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'



const PostJob = () => {
    const [input,setInput] = useState({
        title:"",
        description:"",
        requirement:"",
        salary:"",
        location:"",
        jobType:"",
        experience:"",
        position:0,
        companyId:""

    });
    const {companies} = useSelector(store => store.company);
    const changeEventHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value});
    } ;
  const selectChangeHandler  = (value) => 
    {
     const selectCompany = companies.find((company) =>  company.name.toLowerCase() === value.toLowerCase());
     setInput({...input, companyId:selectCompany._id});
  }
  const submitHandler =(e) =>{
    e.preventDefault();
    console.log(input);

  }
   
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center w-screen my-5'>
      <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>

      
      <div className='grid grid-cols-2 gap-2'>
      <div>
            <Label>
             Title
            </Label>
        <Input
           type='text'
           name ='title'
           value={input.title}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        <div>
            <Label>
             Description
            </Label>
        <Input
           type='text'
           name ='description'
           value={input.description}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        <div>
            <Label>
            Requirement
            </Label>
        <Input
           type='text'
           name ='requirement'
           value={input.requirement}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        <div>
            <Label>
             Salary
            </Label>
        <Input
           type='text'
           name ='salary'
           value={input.salary}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        <div>
            <Label>
              Loction
            </Label>
        <Input
           type='text'
           name ='location'
           value={input.location}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        <div>
            <Label>
              Job Type
            </Label>
        <Input
           type='text'
           name ='jobType'
           value={input.jobType}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        <div>
            <Label>
              Experience Level
            </Label>
        <Input
           type='text'
           name ='experience'
           value={input.experience}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        <div>
            <Label>
              No of Position
            </Label>
        <Input
           type='number'
           name ='position'
           value={input.position}
           onChange={changeEventHandler}
           className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' 
        />
        </div>
        {
            companies.length >= 0 && (
                <Select onValueChange={selectChangeHandler}>
        <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a company" />
        </SelectTrigger>
      <SelectContent>
     <SelectGroup>
        {
            companies.map((company)=>{
             return(
               <SelectItem value={company.name} key={company._id}>
                 {company.name}
               </SelectItem> 
             )
            })
        }
     </SelectGroup>
  </SelectContent>
</Select>

            )
        }
      </div>
      <Button className='w-full mt-4' >Post New Job</Button>
      {
       companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>Please register a company first, before posting a job</p> 
     }
      </form>
     
      </div>
    </div>
  )
}

export default PostJob