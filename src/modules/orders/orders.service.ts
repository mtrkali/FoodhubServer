
import { OrderStatus } from "../../generated/enums";
import { prisma } from "../../lib/prisma";

const createOrder = async(payload: any, userId: string) =>{
    const {items, address} = payload;
    
    let totalPrice = 0;

    const orderItemsData = await Promise.all(
        items.map(async(item: any) => {
            const meal = await prisma.meal.findUnique({
                where: {id: item.mealId},
            });

            if(!meal) throw new Error("Meal not found");

            totalPrice += meal.price * item.quantity;

            return {
                mealId: item.mealId,
                quantity: item.quantity,
            };
        })
    );

    const order = await prisma.order.create({
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


const getMyOrders = async(userId: string) => {
    return prisma.order.findMany({
        where: {userId},
        include: {
            items: {
                include: {
                    meal: true,
                }
            }
        },
        orderBy: {createdAt: "desc",},
    })
}

const getProviderOrders = async(userId: string) =>{
    const provider = await prisma.providerProfile.findUnique({
        where: {userId},
    });

    if(!provider) throw new Error("Provider not found");

    return prisma.order.findMany({
        where: {
            items: {
                some: {
                    meal: {providerId: provider.id,},
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

const updateOrderStatus = async (orderId: string, status: OrderStatus) =>{
    return prisma.order.update({
        where: {id: orderId},
        data: {status},
    });
};

export const ordersService = {
    createOrder, getMyOrders, getProviderOrders, updateOrderStatus 
}