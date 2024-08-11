import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   fullName: {
      type: String,
      require: true
   },
   email: {
      type: String,
      require: true,
      unique: true
   },
   phoneNumber: {
      type: Number,
      require: true
   },
   password: {
      type: String,
      require: true
   },
   role: {
      type: String,
      enum: ['student', 'recruiter'],
      required: true,
   },
   profile: {
      bio: {
         type: String
      },
      skills: [{
         type: String,
      }],
      resume: {
         type: String,
         //url of resume file
      },
      resumeOriginalName: {
         type: String
      },
      company: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Company'
      },
      profilePhoto: {
         type: String,
         defult: ""
      }
   }

},
{
   timestamps: true
});

export const User = mongoose.model("User", userSchema);