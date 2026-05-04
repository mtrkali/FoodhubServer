import express, { type Request, type Response } from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth";
import { mealsRouter } from "./modules/meals/meals.router";
import { ordersRouter } from "./modules/orders/orders.router";
import { adminRouterUser } from "./modules/admin/user-route/admin.router";
import { adminRouterOrder } from "./modules/admin/order-route/admin.router";
import { adminRouterCategory } from "./modules/admin/category-route/admin.router";
import { authRouter } from "./modules/auth/auth.router";
import { providerRouter } from "./modules/providers/provider.router";

const app = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use("/api/auth", authRouter);


app.all("/api/auth/*splat", toNodeHandler(auth))
app.use("/meals",mealsRouter);
app.use("/order", ordersRouter);
app.use("/user-admin",adminRouterUser);
app.use("/order-admin",adminRouterOrder);
app.use("/category-admin", adminRouterCategory);
app.use("/providers", providerRouter)


app.get("/", (req: Request, res: Response) => {
    res.send("FooD Server is running!");
});

export default app;