import mongoose from 'mongoose';
import  {Job} from "../models/job.model.js";


export const postJob=async(req,res) =>{
    try {
    const{title,description,requirements,salary,location,jobType,experience,position,companyId} = req.body;
    const userId=req.id;
    if(!title || !description ||!requirements || !salary|| !location || !jobType || !experience || !position || !companyId){
       return res.status(400).json({
        message:"Something is missing",
        success:false
       });
    };
    const job=await Job.create({
        title,
        description,
     requirements: requirements.split(","),
    salary:Number(salary),
    location,
    jobType,
    experienceLevel:experience,
    position,
    company:companyId,
    createdBy:userId,

    });
    return res.status(201).json({
        message:"New job created succesfully",
        job,
        success:true
    });
} catch (error) {
    console.log(error);
    
}

}

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('company').sort({ createdAt: -1 });
        console.log("Jobs fetched:", jobs); // Log the fetched jobs
        if (!jobs || jobs.length === 0) {
            return res.status(404).json({
                message: "No jobs found",
                success: false,
            });
        }
        return res.status(200).json({
            jobs,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};



export const getJobById =async(req,res)=>{
    try {
       const jobId=req.params.id;
       const job=await Job.findById(jobId).populate({
        path:'applications'
       });
      
       if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({
            message: "Invalid Job ID",
            success: false,
        });
    }
     
       if(!job){
        return res.status(404).json({
            message:"Jobs not found",
            success:true,
        });
       }

       return res.status(200).json({
        job,
        success:true
       });



    } catch (error) {
        console.log(error);
    }
}

export const getAdminJobs =async(req, res) =>{
    try {
       const adminId=req.id;
       const jobs=await Job.find({createdBy:adminId}).populate({
        path:'company',
        createdAt:-1
       });
       if(!jobs){
        return res.status(400).json({
            message:"Jobs not found",
            success:true,
        });

       } 
       return res.status(200).json({
         jobs,
         success:true
       })
    }
     catch (error) {
       console.log(error) 
    }
}