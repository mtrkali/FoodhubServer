import { prisma } from "../../lib/prisma";

const createReview = async(
    userId: string,
    mealId: string,
    rating: number,
    comment: string
) => {
    return await prisma.review.create({
        data: {
            userId,
            mealId,
            rating,
            comment
        }
    });
};

export const reviewService = {
    createReview
}   
