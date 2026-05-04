import { prisma } from "../../lib/prisma"
import type { createMealInput } from "../../types/meal.type";

const getAllMeals = async () => {
    return await prisma.meal.findMany({
        include: {
            provider: true,
            category: true,
        },
    });
}

const getMealById = async(id: string) =>{
    return await prisma.meal.findUnique({
        where: {id},
        include: {
            provider: true,
            category: true,
        },
    });
}


const createMeal = async( data:createMealInput, userId:string ) => {
    const provider = await prisma.providerProfile.findUnique({
        where: {userId: userId}
    })
    if(!provider){throw new Error ("provider not found")}

    const result = await prisma.meal.create({
        data: {
            ...data,
            providerId: provider.id,
        }
    })
    return result ;
}

const updateMeal = async (
    mealId: string, 
    data: createMealInput, 
    userId: string) => {
const provider = await prisma.providerProfile.findUnique({
    where: {userId},
});
if(!provider){
    throw new Error ("provider not found")
}
const meal = await prisma.meal.findUnique({
    where: {id: mealId},
});
if(!meal || meal.providerId !== provider.id){throw new Error ("Unathorized")}

return prisma.meal.update({
    where: {id: mealId},
    data: data,
})
}


const deleteMeal = async (mealId: string, userId: string) => {
    const provider = await prisma.providerProfile.findUnique({
        where: {userId},
    });

    if(!provider) {throw new Error("provider not found")};
    
    const meal = await prisma.meal.findUnique({
        where: {id: mealId},
    });

    if(!meal || meal.providerId !== provider.id){throw new Error("Unauthorized")}

    return prisma.meal.delete({
        where: {id: mealId},
    });

};

const getMyMeals = async (userId: string) => {
    const provider = await prisma.providerProfile.findUnique({
        where: {userId},
    });

    if(!provider){throw new Error("provider not found")}

    return await prisma.meal.findMany({
        where: {providerId: provider.id},
    });
    
    }


export const mealService = {
    getAllMeals, getMealById, createMeal, updateMeal, deleteMeal, getMyMeals 
}