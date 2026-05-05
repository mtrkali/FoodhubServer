"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const admin_service_1 = require("./admin.service");
const getAllOrders = async (req, res) => {
    try {
        const result = await admin_service_1.adminService.getAllOrders();
        res.status(201).json({
            message: "all order get success for admin!!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from getAllOrders controller (admin)",
            error: error.message,
        });
    }
};
exports.adminController = {
    getAllOrders
};
//# sourceMappingURL=admin.controller.js.map