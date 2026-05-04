import express from "express"
import { Router } from "express";
import auth, { UserRole } from "../../../middlewares/auth";
import { adminController } from "./admin.controller";

const router = express.Router()

router.get(
    "/",
    auth(UserRole.ADMIN),
    adminController.getAllUsers
)

router.patch(
    "/",
    auth(UserRole.ADMIN),
    adminController.updateUserStatus
)
   

export const adminRouterUser = router;