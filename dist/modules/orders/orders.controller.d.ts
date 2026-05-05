import type { Request, Response } from "express";
export declare const ordersController: {
    createOrder: (req: Request, res: Response) => Promise<void>;
    getMyOrders: (req: Request, res: Response) => Promise<void>;
    getProviderOrders: (req: Request, res: Response) => Promise<void>;
    updateOrderStatus: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=orders.controller.d.ts.map