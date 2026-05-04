import express from "express";
import auth, { UserRole } from "../../../middlewares/auth";
import { adminController } from "./admin.controller";


const router = express.Router();

router.get(
    "/",
    auth(UserRole.ADMIN),
    adminController.getAllOrders
)

   

export const adminRouterOrder = router;