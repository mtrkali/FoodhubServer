import { Request, Response } from "express";
import { reviewService } from "./review.service";

const createReview = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { mealId, rating, comment } = req.body;
        const result = await reviewService.createReview(user?.id as string, mealId, rating, comment);
        res.status(201).json({
            message: "review created successfully!!",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating review",
            error: (error as Error).message
        });
    }
};

export const reviewController = {
    createReview
}