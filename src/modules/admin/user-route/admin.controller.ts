import type { Request, Response } from "express";
import { adminService } from "./admin.service";

const getAllUsers = async(req: Request, res:Response)=>{
    try {
         const result = await adminService.getAllUsers()
         res.status(201).json({
             message: "all user get success!!",
             data: result,
         })
        } catch (error: any) {
            res.status(500).json({
               message: "Something went wrong from getAllUsers controller",
               error: error.message,
        })
     }
}

const updateUserStatus = async(req: Request, res:Response)=>{
    try {
        const {id, status} = req.body;
         const result = await adminService.updateUserStatus(id as string, status)
         res.status(201).json({
             message: "user status update success!!",
             data: result,
         })
        } catch (error: any) {
            res.status(500).json({
               message: "Something went wrong from updateUserStatus  controller",
               error: error.message,
        })
     }
}


export const adminController = {
    getAllUsers,updateUserStatus 
}