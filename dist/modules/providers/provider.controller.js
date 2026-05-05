"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerController = void 0;
const provider_service_1 = require("./provider.service");
const getAllProviders = async (req, res) => {
    try {
        const result = await provider_service_1.providerService.getAllProviders();
        return res.status(200).json({
            success: true,
            message: "provider get success!",
            data: result
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong ggetAllProviders controller",
            details: error,
        });
    }
};
exports.providerController = {
    getAllProviders
};
//# sourceMappingURL=provider.controller.js.map