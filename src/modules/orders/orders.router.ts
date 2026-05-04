import express from "express"
import auth, { UserRole } from "../../middlewares/auth"
import { ordersController } from "./orders.controller";


const router = express.Router()

router.post(
    "/",
    auth(UserRole.ADMIN,UserRole.CUSTOMER,UserRole.PROVIDER),
    ordersController.createOrder
)

router.get(
    "/self",
    auth(UserRole.ADMIN,UserRole.CUSTOMER,UserRole.PROVIDER),
    ordersController.getMyOrders
)

router.get(
    "/provider",
    auth(UserRole.PROVIDER),
    ordersController.getProviderOrders
)

router.patch(
    "/:orderId",
    auth(UserRole.PROVIDER),
    ordersController.updateOrderStatus
)

export const ordersRouter = router;