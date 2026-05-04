import type { Request, Response } from "express"
import { ordersService } from "./orders.service";

const createOrder = async(req: Request, res: Response) =>{
    try {
        const user = req.user;
        const result = await ordersService.createOrder(req.body, user?.id as string)
        res.status(200).json({
            message: "create order success!!",
            order: result,
        })
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "something went wrong in createOrder controller",
            details: error
        })
    }
}

const getMyOrders  = async (req: Request, res: Response)=>{
    try {
        const user = req.user;
        const result = await ordersService.getMyOrders(user?.id as string)
        res.status(201).json({
            message: "all order feached success!!",
            data: result,
        })
    } catch (error: any) {
         res.status(500).json({
            message: "Something went wrong from getMyOrders controller",
            error: error.message,
        })
 }
}

const getProviderOrders  = async (req: Request, res: Response)=>{
    try {
        const user = req.user;
        const result = await ordersService.getProviderOrders(user?.id as string)
        res.status(201).json({
            message: "all provider order feached success!!",
            data: result,
        })
    } catch (error: any) {
         res.status(500).json({
            message: "Something went wrong from getProviderOrders controller",
            error: error.message,
        })
 }
}

const updateOrderStatus  = async (req: Request, res: Response)=>{
    try {
        const {orderId,status} = req.body;
        const result = await ordersService.updateOrderStatus(orderId as string, status)
        res.status(201).json({
            message: "order status update success!!",
            meal: result,
        })
    } catch (error: any) {
         res.status(500).json({
            message: "Something went wrong from updateOrderStatus controller",
            error: error.message,
        })
 }
}


export const ordersController = {
    createOrder, getMyOrders, getProviderOrders, updateOrderStatus 
}