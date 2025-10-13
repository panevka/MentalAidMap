import express from "express";

import providerRouter from "@/modules/provider/api/provider.router";
import simplifiedSupportResourceRouter from "@/modules/simplified-support-resource/api/simplified-support-resource.router";

const router = express.Router();

router.use("/provider", providerRouter);
router.use("/support-resource", simplifiedSupportResourceRouter);

export default router;
