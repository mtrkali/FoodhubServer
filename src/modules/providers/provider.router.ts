import express from "express";
import { providerController } from "./provider.controller";


const router = express.Router();

router.get(
    "/",
    providerController.getAllProviders
)

export const providerRouter = router
