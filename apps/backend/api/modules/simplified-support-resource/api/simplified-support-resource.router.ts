import express from "express";
import { SimplifiedSupportResourceController } from "./simplified-support-resource.controller";

const router = express.Router();
const controller = new SimplifiedSupportResourceController();

router.get("/", controller.getSupportResources);

export default router;
