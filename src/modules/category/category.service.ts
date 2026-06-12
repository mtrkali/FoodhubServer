import { prisma } from "../../lib/prisma"

const createCategory = async(name: string) => {
    return await prisma.mealCategory.create({
        data: {
            name,
        },
    })
}

export const categoryService = {
    createCategory
}