import express from "express";
import { contactController, loginController, registerController } from "../controller/authController.js";


//router object
const router=express.Router();

//routing

//Register || Method Post
router.post("/register",registerController);


//LOGIN||POST
router.post('/login',loginController);


//contact post
router.post("/contact",contactController);


export default router;