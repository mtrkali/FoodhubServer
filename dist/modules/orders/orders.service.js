"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersService = void 0;
const prisma_1 = require("../../lib/prisma");
const createOrder = async (payload, userId) => {
    const { items, address } = payload;
    let totalPrice = 0;
    const orderItemsData = await Promise.all(items.map(async (item) => {
        const meal = await prisma_1.prisma.meal.findUnique({
            where: { id: item.mealId },
        });
        if (!meal)
            throw new Error("Meal not found");
        totalPrice += meal.price * item.quantity;
        return {
            mealId: item.mealId,
            quantity: item.quantity,
        };
    }));
    const order = await prisma_1.prisma.order.create({
        data: {
            userId,
            totalPrice,
            address,
            items: {
                create: orderItemsData,
            },
        },
        include: {
            items: true,
        },
    });
    return order;
};
const getMyOrders = async (userId) => {
    return prisma_1.prisma.order.findMany({
        where: { userId },
        include: {
            items: {
                include: {
                    meal: true,
                }
            }
        },
        orderBy: { createdAt: "desc", },
    });
};
const getProviderOrders = async (userId) => {
    const provider = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId },
    });
    if (!provider)
        throw new Error("Provider not found");
    return prisma_1.prisma.order.findMany({
        where: {
            items: {
                some: {
                    meal: { providerId: provider.id, },
                },
            },
        },
        include: {
            items: {
                include: {
                    meal: true,
                },
            },
            user: true,
        },
    });
};
const updateOrderStatus = async (orderId, status) => {
    return prisma_1.prisma.order.update({
        where: { id: orderId },
        data: { status },
    });
};
exports.ordersService = {
    createOrder, getMyOrders, getProviderOrders, updateOrderStatus
};
//# sourceMappingURL=orders.service.js.map