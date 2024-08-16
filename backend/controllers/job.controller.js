import Job from "../models/job.model.js";


export const postJob=async(req,res) =>{
    try {
    const{title,description,requirement,salary,location,jobType,experience,position,companyId} = req.body;
    const userId=req.id;
    if(!title || !description ||!requirement || !salary|| !location || !jobType || !experience || !position || !companyId){
       return res.status(400).json({
        message:"Something is missing",
        success:false
       });
    };
    const job=await Job.create({
        title,
        description,
    requirements:requirements.split(","),
    salary:Number(salary),
    location,
    jobType,
    experienceLevel:experience,
    position,
    company:conpanyId,
    created_by:userId,

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

export const getAllJobs=async(req,res)=>{
    try {
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword, $options:"i"}},
         {description:{$regex:keyword, $options:"i"}},
            ]
        };
        const jobs=await Job.find(query);
         if(!jobs){
            return res.status(404).json({
                message:"JObs NOt Found",
                success:false,
            })
         }
         return res.json(200).json({
         jobs,
        success:true
         })
    } catch (error) {
        console.log(error);
        
    }
}
