"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerService = void 0;
const prisma_1 = require("../../lib/prisma");
const getAllProviders = async () => {
    return await prisma_1.prisma.providerProfile.findMany({
        include: {
            user: true,
        }
    });
};
exports.providerService = {
    getAllProviders,
};
//# sourceMappingURL=provider.service.js.map