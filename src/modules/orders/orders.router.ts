import express from "express"
import auth, { UserRole } from "../../middlewares/auth"
import { ordersController } from "./orders.controller";


const router = express.Router()

router.post(
    "/",
    auth(UserRole.ADMIN,UserRole.PROVIDER,UserRole.CUSTOMER),
    ordersController.createOrder
)

router.get(
    "/",
    auth(UserRole.ADMIN,UserRole.PROVIDER,UserRole.CUSTOMER),
    ordersController.getAllOrders
)

router.get(
    "/provider",
    auth(UserRole.PROVIDER),
    ordersController.getProviderOrders
)

router.get(
    "/self",
    auth(UserRole.ADMIN,UserRole.PROVIDER,UserRole.CUSTOMER),
    ordersController.getMyOrders
)


router.patch(
    "/:orderId",
    auth(UserRole.PROVIDER),
    ordersController.updateOrderStatus
)

export const ordersRouter = router;