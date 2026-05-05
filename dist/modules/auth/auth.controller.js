"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
const getCurrentUser = async (req, res) => {
    try {
        const user = await auth_service_1.authService.getCurrentUser(req.headers);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unathorized",
            });
        }
        res.json({
            succes: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong getCurrent User Controller",
        });
    }
};
exports.authController = {
    getCurrentUser,
};
//# sourceMappingURL=auth.controller.js.map