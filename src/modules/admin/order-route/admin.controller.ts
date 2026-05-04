import { adminService } from "./admin.service";
import type { Request, Response } from "express";

const getAllOrders  = async(req: Request, res:Response)=>{
    try {
         const result = await adminService.getAllOrders();
         res.status(201).json({
             message: "all order get success for admin!!",
             data: result,
         })
        } catch (error: any) {
            res.status(500).json({
               message: "Something went wrong from getAllOrders controller (admin)",
               error: error.message,
        })
     }
}

export const adminController = {
    getAllOrders
}