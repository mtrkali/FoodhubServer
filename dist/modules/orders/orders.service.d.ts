import { OrderStatus } from "../../generated/enums";
export declare const ordersService: {
    createOrder: (payload: any, userId: string) => Promise<{
        items: {
            id: string;
            mealId: string;
            quantity: number;
            orderId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        totalPrice: number;
        address: string;
        status: OrderStatus;
    }>;
    getMyOrders: (userId: string) => Promise<({
        items: ({
            meal: {
                id: string;
                createdAt: Date;
                title: string;
                price: number;
                providerId: string;
                categoryId: string | null;
            };
        } & {
            id: string;
            mealId: string;
            quantity: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        totalPrice: number;
        address: string;
        status: OrderStatus;
    })[]>;
    getProviderOrders: (userId: string) => Promise<({
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../../generated/enums").Role;
            phone: string | null;
            status: import("../../generated/enums").UserStatus;
        };
        items: ({
            meal: {
                id: string;
                createdAt: Date;
                title: string;
                price: number;
                providerId: string;
                categoryId: string | null;
            };
        } & {
            id: string;
            mealId: string;
            quantity: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        totalPrice: number;
        address: string;
        status: OrderStatus;
    })[]>;
    updateOrderStatus: (orderId: string, status: OrderStatus) => Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        totalPrice: number;
        address: string;
        status: OrderStatus;
    }>;
};
//# sourceMappingURL=orders.service.d.ts.map