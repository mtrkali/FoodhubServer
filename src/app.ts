
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
import { categoryRouter } from "./modules/category/category.router";
import { reviewRouter } from "./modules/reviews/review.router";

const app = express();

app.use(cors({
    origin: "*",
    credentials: true,
}));

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());
app.use("/api/verify", authRouter);


app.use("/meals",mealsRouter);
app.use("/orders", ordersRouter);
app.use("/user-admin",adminRouterUser);
app.use("/order-admin",adminRouterOrder);
app.use("/category_admin", adminRouterCategory);
app.use("/providers", providerRouter);
app.use("/category", categoryRouter);
app.use("/reviews", reviewRouter);


app.get("/", (req, res) => {
    res.status(200).send("OK");
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
export default app;