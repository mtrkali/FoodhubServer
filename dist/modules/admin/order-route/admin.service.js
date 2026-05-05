"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const prisma_1 = require("../../../lib/prisma");
const getAllOrders = async () => {
    return await prisma_1.prisma.order.findMany({
        include: {
            user: true,
            items: {
                include: {
                    meal: true,
                },
            },
        },
    });
};
exports.adminService = {
    getAllOrders
};
//# sourceMappingURL=admin.service.js.map