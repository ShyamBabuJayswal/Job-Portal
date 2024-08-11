export const register  = async(req,res) => {
    try {
       
        const {fullname,email,phoneNumber,password,role}=req.body;
        if(!fullname || !email || !phoneNumber || !password){
           return res.status(404)
           .json({
            message:"Something is missing",
            success:false
           })
        }
    } catch (error) {
        
    }

}
    
