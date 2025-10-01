import express from "express";

import providerRouter from "@/provider/provider.router";
import supportResourceRouter from "@/support-resource/support-resource.router";

const router = express.Router();

router.use("/provider", providerRouter);
router.use("/support-resource", supportResourceRouter);

export default router;
