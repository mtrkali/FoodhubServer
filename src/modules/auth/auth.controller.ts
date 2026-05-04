import type { Request, Response } from "express"
import { authService } from "./auth.service";

const getCurrentUser = async(req:Request, res: Response) =>{
    try {
        const user = await authService.getCurrentUser(req.headers);

        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Unathorized",
            });
        }

        res.json({
            succes: true,
            data: user,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong getCurrent User Controller",
        });
    }
}


export const authController = {
    getCurrentUser,
}