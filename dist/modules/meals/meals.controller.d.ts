import type { Request, Response } from "express";
export declare const mealsController: {
    getAllMeals: (req: Request, res: Response) => Promise<void>;
    getMealById: (req: Request, res: Response) => Promise<void>;
    createMeal: (req: Request, res: Response) => Promise<void>;
    updateMeal: (req: Request, res: Response) => Promise<void>;
    deleteMeal: (req: Request, res: Response) => Promise<void>;
    getMyMeals: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=meals.controller.d.ts.map