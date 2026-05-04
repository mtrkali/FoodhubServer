
import type { Request, Response } from "express";
import { providerService } from "./provider.service";

const getAllProviders = async(req: Request, res: Response)=>{
    try {
        const result = await providerService.getAllProviders();
        return res.status(200).json({
            success: true,
            message: "provider get success!",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong ggetAllProviders controller",
            details: error,
        })
    }
}

export const providerController = {
    getAllProviders
}