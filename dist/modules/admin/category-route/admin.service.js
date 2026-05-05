"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const prisma_1 = require("../../../lib/prisma");
const createCategory = async (name) => {
    return prisma_1.prisma.mealCategory.create({
        data: { name },
    });
};
exports.adminService = {
    createCategory,
};
//# sourceMappingURL=admin.service.js.map