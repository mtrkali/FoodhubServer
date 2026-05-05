"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealService = void 0;
const prisma_1 = require("../../lib/prisma");
const getAllMeals = async () => {
    return await prisma_1.prisma.meal.findMany({
        include: {
            provider: true,
            category: true,
        },
    });
};
const getMealById = async (id) => {
    return await prisma_1.prisma.meal.findUnique({
        where: { id },
        include: {
            provider: true,
            category: true,
        },
    });
};
const createMeal = async (data, userId) => {
    const provider = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId: userId }
    });
    if (!provider) {
        throw new Error("provider not found");
    }
    const result = await prisma_1.prisma.meal.create({
        data: {
            ...data,
            providerId: provider.id,
        }
    });
    return result;
};
const updateMeal = async (mealId, data, userId) => {
    const provider = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId },
    });
    if (!provider) {
        throw new Error("provider not found");
    }
    const meal = await prisma_1.prisma.meal.findUnique({
        where: { id: mealId },
    });
    if (!meal || meal.providerId !== provider.id) {
        throw new Error("Unathorized");
    }
    return prisma_1.prisma.meal.update({
        where: { id: mealId },
        data: data,
    });
};
const deleteMeal = async (mealId, userId) => {
    const provider = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId },
    });
    if (!provider) {
        throw new Error("provider not found");
    }
    ;
    const meal = await prisma_1.prisma.meal.findUnique({
        where: { id: mealId },
    });
    if (!meal || meal.providerId !== provider.id) {
        throw new Error("Unauthorized");
    }
    return prisma_1.prisma.meal.delete({
        where: { id: mealId },
    });
};
const getMyMeals = async (userId) => {
    const provider = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId },
    });
    if (!provider) {
        throw new Error("provider not found");
    }
    return await prisma_1.prisma.meal.findMany({
        where: { providerId: provider.id },
    });
};
exports.mealService = {
    getAllMeals, getMealById, createMeal, updateMeal, deleteMeal, getMyMeals
};
//# sourceMappingURL=meals.service.js.map