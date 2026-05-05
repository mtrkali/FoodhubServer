"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealsController = void 0;
const meals_service_1 = require("./meals.service");
const getAllMeals = async (req, res) => {
    try {
        const meals = await meals_service_1.mealService.getAllMeals();
        res.status(200).json(meals);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};
const getMealById = async (req, res) => {
    try {
        const { mealId } = req.params;
        const meal = await meals_service_1.mealService.getMealById(mealId);
        res.status(200).json(meal);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};
const createMeal = async (req, res) => {
    try {
        const user = req.user;
        const result = await meals_service_1.mealService.createMeal(req.body, user?.id);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};
const updateMeal = async (req, res) => {
    try {
        const user = req.user;
        const { mealId } = req.params;
        const result = await meals_service_1.mealService.updateMeal(mealId, req.body, user?.id);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};
const deleteMeal = async (req, res) => {
    try {
        const user = req.user;
        const { mealId } = req.params;
        const result = await meals_service_1.mealService.deleteMeal(mealId, user?.id);
        res.status(201).json({
            message: "meal delete success!!",
            meal: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};
const getMyMeals = async (req, res) => {
    try {
        const user = req.user;
        const result = await meals_service_1.mealService.getMyMeals(user?.id);
        res.status(201).json({
            message: "all meal feached success!!",
            meal: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from getMyMeals controller",
            error: error.message,
        });
    }
};
exports.mealsController = {
    getAllMeals,
    getMealById,
    createMeal,
    updateMeal,
    deleteMeal,
    getMyMeals,
};
//# sourceMappingURL=meals.controller.js.map