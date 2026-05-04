import express from "express"
import { mealsController } from "./meals.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.get(
    "/", 
    mealsController.getAllMeals
);

router.get(
    "/self",
     auth(UserRole.PROVIDER, UserRole.ADMIN, UserRole.CUSTOMER),
     mealsController.getMyMeals 
)

router.get(
    "/:mealId",
    mealsController.getMealById
);

router.post(
    "/", 
    auth(UserRole.PROVIDER, UserRole.ADMIN, UserRole.CUSTOMER),
    mealsController.createMeal
)

router.patch(
    "/:mealId",
     auth(UserRole.PROVIDER, UserRole.ADMIN, UserRole.CUSTOMER),
     mealsController.updateMeal
)

router.delete(
    "/:mealId",
     auth(UserRole.PROVIDER, UserRole.ADMIN, UserRole.CUSTOMER),
     mealsController.deleteMeal 
)


export const mealsRouter = router;