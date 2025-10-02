import express from "express";
import { validateRequest } from "../../../lib/middleware/validation.middleware";
import {
  providersDataQueryValidator,
  providersQueryValidator,
} from "../application/provider.validator";
import { ProviderController } from "./provider.controller";
import { RequestPayloadType } from "@/lib/types/typeUtils";

const router = express.Router();
const controller = new ProviderController();

router.get(
  "/",
  [validateRequest(providersQueryValidator, RequestPayloadType.Query)],
  controller.getProviders,
);

router.get("/data", [
  validateRequest(providersDataQueryValidator, RequestPayloadType.Query),
  controller.getProviderData,
]);

export default router;
