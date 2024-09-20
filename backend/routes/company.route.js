import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompanyById, registerCompany, updateCompnay,getCompany } from "../controllers/company.controller.js";
import {singleUpload} from '../middlewares/multer.js'

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);

router.route("/get").get(isAuthenticated,getCompany);

router.route("/get/:id").get(isAuthenticated,getCompanyById);

router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompnay); 
// Changed to PUT for update

export default router;
