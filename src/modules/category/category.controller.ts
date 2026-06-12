import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const result = await categoryService.createCategory(name);
        return res.status(200).json({
            success: true,
            message: "category created successfully!",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong createCategory controller",
            details: error,
        })
    }   

}

export const categoryController = {
    createCategory
}