import express from "express";

import providerRouter from "@/modules/provider/api/provider.router";
import supportResourceRouter from "@/modules/support-resource/api/support-resource.router";

const router = express.Router();

router.use("/provider", providerRouter);
router.use("/support-resource", supportResourceRouter);

export default router;
