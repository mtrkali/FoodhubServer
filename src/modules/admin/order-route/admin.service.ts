import { prisma } from "../../../lib/prisma";

const getAllOrders = async() =>{
    return await prisma.order.findMany({
        include: {
            user: true,
            items: {
                include: {
                    meal: true,
                },
            },
        },
    });
}


export const adminService = {
    getAllOrders
}