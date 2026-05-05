"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_1 = require("better-auth/node");
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./lib/auth");
const meals_router_1 = require("./modules/meals/meals.router");
const orders_router_1 = require("./modules/orders/orders.router");
const admin_router_1 = require("./modules/admin/user-route/admin.router");
const admin_router_2 = require("./modules/admin/order-route/admin.router");
const admin_router_3 = require("./modules/admin/category-route/admin.router");
const auth_router_1 = require("./modules/auth/auth.router");
const provider_router_1 = require("./modules/providers/provider.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
}));
app.use(express_1.default.json());
app.use("/api/auth", auth_router_1.authRouter);
app.all("/api/auth", (0, node_1.toNodeHandler)(auth_1.auth));
app.use("/meals", meals_router_1.mealsRouter);
app.use("/order", orders_router_1.ordersRouter);
app.use("/user-admin", admin_router_1.adminRouterUser);
app.use("/order-admin", admin_router_2.adminRouterOrder);
app.use("/category-admin", admin_router_3.adminRouterCategory);
app.use("/providers", provider_router_1.providerRouter);
app.get("/", (req, res) => {
    res.status(200).send("OK");
});
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
exports.default = app;
//# sourceMappingURL=app.js.map