"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const auth_1 = require("../../lib/auth");
const router = express_1.default.Router();
router.get("/me", auth_controller_1.authController.getCurrentUser);
router.post("/logOut", async (req, res) => {
    try {
        await auth_1.auth.api.signOut({
            headers: {
                cookie: req.headers.cookie || "",
            }
        });
        res.clearCookie("better-auth.session_token", {
            httpOnly: true,
            sameSite: "lax"
        });
        res.json({ message: "LogOut" });
    }
    catch (error) {
        res.status(500).json({ message: "Logout failed" });
    }
});
exports.authRouter = router;
//# sourceMappingURL=auth.router.js.map