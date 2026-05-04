import express from "express"
import auth, { UserRole } from "../../../middlewares/auth";
import { adminController } from "./admin.controller";

const router = express.Router();

router.post (
    "/",
    auth(UserRole.ADMIN),
    adminController.createCategory
)

export const adminRouterCategory = router 