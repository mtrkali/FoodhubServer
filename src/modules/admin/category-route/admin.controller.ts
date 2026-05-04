import type { Request, Response } from "express"
import { adminService } from "./admin.service";

const createCategory = async (req: Request, res: Response)=>{
     try {
            const {name} = req.body;
            const result = await adminService.createCategory(name)
            res.status(201).json({
                message: "category create success!!",
                data: result,
            })
        } catch (error: any) {
             res.status(500).json({
                message: "Something went wrong from createCategory controller(admin)",
                error: error.message,
            })
     }
} 

export const adminController = {
    createCategory,
}