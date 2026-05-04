import { prisma } from "../../../lib/prisma"

const createCategory = async(name: string) =>{
    return prisma.mealCategory.create({
        data: {name},
    });
};

export const adminService = {
    createCategory,
}