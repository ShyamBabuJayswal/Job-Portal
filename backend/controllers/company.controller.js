
import {Company} from "../models/company.model.js"
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    // Check if company name is provided
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    // Normalize the company name to handle case and whitespace issues
    const normalizedCompanyName = companyName.trim().toLowerCase();
 

    // Check if the company already exists in the database
    let company = await Company.findOne({ name: normalizedCompanyName });
    
    if (company) {
      return res.status(400).json({
        message: "You can't register the same company",
        success: false,
      });
    }

    // Create the company if it doesn't exist
    company = await Company.create({
      name: normalizedCompanyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};


export const getCompany = async(req,res)=>{
    try {
        const userId = req.id;//logged in user id
        const companies=await Company.find({userId});
        if(!companies){
            return res.status(404).json({
                message:"Companies not found",
                success:false
            })
        }
        return res.status(200).json({
           companies,
           success:true 
        })
    } catch (error) {
      console.log(error);  
    }
}
export const getCompanyById = async(req,res)=>{
    try {
       const companyId = req.params.id;
       const company = await Company.findById(companyId); 
       if(!company){
        return res.status(404).json({
            message:"Companies not found",
            success:false
        });
       }
       return res.status(200).json({
        company,
        success:true,
       })
    } catch (error) {
       console.log(error); 
    }
}

export const updateCompnay = async (req,res)  =>{
    try {
       const {name,description,website,location}=req.body;
       const file =req.file;
       //cloudnary
       const fileUri  = getDataUri(file);
       const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
       const logo = cloudResponse.secure_url;

       
       const updateData={name,description,website,location,logo};

       const company =await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});
       if(!company){
        return res.status(400).json({
            message:"Company not found",
            success:false
        })
       }
       return res.status(200).json({
        message:"Company information  updated successfully",
        success:true
       })

    } catch (error) {
       console.log(error);
        
    }
}