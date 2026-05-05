"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const admin_service_1 = require("./admin.service");
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await admin_service_1.adminService.createCategory(name);
        res.status(201).json({
            message: "category create success!!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong from createCategory controller(admin)",
            error: error.message,
        });
    }
};
exports.adminController = {
    createCategory,
};
//# sourceMappingURL=admin.controller.js.map