import type { createMealInput } from "../../types/meal.type";
export declare const mealService: {
    getAllMeals: () => Promise<({
        category: {
            name: string;
            id: string;
        } | null;
        provider: {
            id: string;
            userId: string;
            businessName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        title: string;
        price: number;
        providerId: string;
        categoryId: string | null;
    })[]>;
    getMealById: (id: string) => Promise<({
        category: {
            name: string;
            id: string;
        } | null;
        provider: {
            id: string;
            userId: string;
            businessName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        title: string;
        price: number;
        providerId: string;
        categoryId: string | null;
    }) | null>;
    createMeal: (data: createMealInput, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        price: number;
        providerId: string;
        categoryId: string | null;
    }>;
    updateMeal: (mealId: string, data: createMealInput, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        price: number;
        providerId: string;
        categoryId: string | null;
    }>;
    deleteMeal: (mealId: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        price: number;
        providerId: string;
        categoryId: string | null;
    }>;
    getMyMeals: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        price: number;
        providerId: string;
        categoryId: string | null;
    }[]>;
};
//# sourceMappingURL=meals.service.d.ts.map