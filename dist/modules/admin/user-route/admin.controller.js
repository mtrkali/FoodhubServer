"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const admin_service_1 = require("./admin.service");
const getAllUsers = async (req, res) => {
    try {
        const result = await admin_service_1.adminService.getAllUsers();
        res.status(201).json({
            message: "all user get success!!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from getAllUsers controller",
            error: error.message,
        });
    }
};
const updateUserStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        const result = await admin_service_1.adminService.updateUserStatus(id, status);
        res.status(201).json({
            message: "user status update success!!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from updateUserStatus  controller",
            error: error.message,
        });
    }
};
exports.adminController = {
    getAllUsers, updateUserStatus
};
//# sourceMappingURL=admin.controller.js.map