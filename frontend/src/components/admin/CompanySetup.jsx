import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'


const CompanySetup = () => {
  const[input,setInput]=useState({
    name:"",
    description:"",
    website:"",
    location:"",
    file:null,
  });
  const [loading,setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const changeEventhandler = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }
  const changeFilehandler=(e) => {
    const file=e.target.files?.[0];
    setInput({...input,file});
  }

  const submitHandler  = async(e) => {
    e.preventDefault();
    
    console.log(e.input);
    const formData=new FormData();
    formData.append("name",input.name);
    formData.append("description",input.description);
    formData.append("website",input.website);
    formData.append("location",input.location); 
    if(input.file){
    formData.append("file",input.file);
    }
try {
  setLoading(true);
  const res  = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`,formData,{
    headers:{
      'Content-Type':'multipart/form-data'
    },
    withCredentials:true
  });
  if(res.data.success){
    toast.success(res.data.message);
    navigate("/admin/companies");
  }

}
 catch (error) {
  console.log(error);
  toast.error(error.response.data.message);
  
}
finally{setLoading(false)};
    

  }
  


  return (
    <div>
      <Navbar/>
      <div className='max-w-xl mx-auto my-10'>
        <form onSubmit={submitHandler}>
        <div className='flex items-center gap-5 p-8'>
        <Button onClick={()=>navigate("/admin/companies")} variant='outline' className='flex items-center gap-2 text-gray-500 font-semibold'>
               <ArrowLeft/>
            <span>Back</span>
          </Button>
          <h1 className='font-bold text-xl'>Company Setup</h1>
        </div>
        <div className='grid grid-cols-2 gap-4'>
       <div> 
       <Label>Company Name</Label>
           <Input
            type='text'
            name='name'
            value={input.name}
            onChange={changeEventhandler}
           /></div>
           <div> 
       <Label>Description</Label>
           <Input
            type='text'
            name='description'
            value={input.description}
            onChange={changeEventhandler}
           /></div>
           <div> 
       <Label>Website</Label>
           <Input
            type='text'
            name='website'
            value={input.website}
            onChange={changeEventhandler}
           /></div>
           <div> 
       <Label>Location</Label>
           <Input
            type='text'
            name='location'
            value={input.location}
            onChange={changeEventhandler}
           /></div>
            <div> 
       <Label>Logo</Label>
           <Input
            type='file'
            accept="image/*"
            
            onChange={changeFilehandler}
           /></div>
        
        
        </div>
        
        {
        loading ? <Button className='w-full my-2'><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please Wait</Button>
       :
       <Button type="submit" className='w-full my-2'>Update</Button>
       }
        </form>
      </div>
    </div>
  )
}

export default CompanySetup