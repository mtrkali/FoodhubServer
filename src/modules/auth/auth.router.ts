import express, { type Request, type Response } from "express"
import { authController } from "./auth.controller";
import { auth } from "../../lib/auth";


const router = express.Router();

router.get(
    "/me",
    authController.getCurrentUser
)


router.post("/logOut", async(req: Request, res:Response)=>{
    try {
        await auth.api.signOut({
            headers: {
                cookie: req.headers.cookie || "",
            }
    })
    res.clearCookie("better-auth.session_token", {
        httpOnly: true,
        sameSite: "lax"
    })

        res.json({message: "LogOut"})
    } catch (error) {
        res.status(500).json({message: "Logout failed"})
    }
})

export const authRouter = router