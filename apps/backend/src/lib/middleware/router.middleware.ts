import express from "express";

import providerRouter from "src/modules/provider/api/provider.router";
import simplifiedSupportResourceRouter from "src/modules/simplified-support-resource/api/simplified-support-resource.router";

const router = express.Router();

router.use("/provider", providerRouter);
router.use("/support-resource", simplifiedSupportResourceRouter);

export default router;
