"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const prisma_1 = require("../../../lib/prisma");
const getAllUsers = async () => {
    return await prisma_1.prisma.user.findMany();
};
const updateUserStatus = async (id, status) => {
    return await prisma_1.prisma.user.update({
        where: { id },
        data: { status },
    });
};
exports.adminService = {
    getAllUsers, updateUserStatus,
};
//# sourceMappingURL=admin.service.js.map