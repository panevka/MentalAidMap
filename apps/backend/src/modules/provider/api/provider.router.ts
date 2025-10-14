import express from "express";
import { validateRequest } from "../../../lib/middleware/validation.middleware";
import {
  getProviderDataValidator,
  getProvidersValidator,
} from "../application/provider.validator";
import { ProviderController } from "./provider.controller";
import { RequestPayloadType } from "api/lib/types/typeUtils";

const router = express.Router();
const controller = new ProviderController();

router.get(
  "/",
  [validateRequest(getProvidersValidator, RequestPayloadType.Query)],
  controller.getProviders,
);

router.get("/data", [
  validateRequest(getProviderDataValidator, RequestPayloadType.Query),
  controller.getProviderData,
]);

export default router;
