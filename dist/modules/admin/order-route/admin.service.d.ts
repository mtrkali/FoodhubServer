export declare const adminService: {
    getAllOrders: () => Promise<({
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../../../generated/enums").Role;
            phone: string | null;
            status: import("../../../generated/enums").UserStatus;
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
        status: import("../../../generated/enums").OrderStatus;
    })[]>;
};
//# sourceMappingURL=admin.service.d.ts.map