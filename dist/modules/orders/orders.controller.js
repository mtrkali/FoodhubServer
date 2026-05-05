"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersController = void 0;
const orders_service_1 = require("./orders.service");
const createOrder = async (req, res) => {
    try {
        const user = req.user;
        const result = await orders_service_1.ordersService.createOrder(req.body, user?.id);
        res.status(200).json({
            message: "create order success!!",
            order: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "something went wrong in createOrder controller",
            details: error
        });
    }
};
const getMyOrders = async (req, res) => {
    try {
        const user = req.user;
        const result = await orders_service_1.ordersService.getMyOrders(user?.id);
        res.status(201).json({
            message: "all order feached success!!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from getMyOrders controller",
            error: error.message,
        });
    }
};
const getProviderOrders = async (req, res) => {
    try {
        const user = req.user;
        const result = await orders_service_1.ordersService.getProviderOrders(user?.id);
        res.status(201).json({
            message: "all provider order feached success!!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from getProviderOrders controller",
            error: error.message,
        });
    }
};
const updateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        const result = await orders_service_1.ordersService.updateOrderStatus(orderId, status);
        res.status(201).json({
            message: "order status update success!!",
            meal: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from updateOrderStatus controller",
            error: error.message,
        });
    }
};
exports.ordersController = {
    createOrder, getMyOrders, getProviderOrders, updateOrderStatus
};
//# sourceMappingURL=orders.controller.js.map