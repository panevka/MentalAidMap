import express from "express";
import { validateRequest } from "../middleware/validation.middleware";
import {
  createSupportResourceRouteDefinition,
  deleteSupportResourceRouteDefinition,
  getSupportResources,
  updateSupportResourceRouteDefinition,
} from "./support-resource.controller";
import {
  createSupportResourceValidator,
  deleteSupportResourceValidator,
  updateSupportResourceValidator,
} from "./support-resource.validator";

const router = express.Router();

router.get("/", getSupportResources);

router.post(
  "/",
  [
    validateRequest(
      createSupportResourceValidator,
      createSupportResourceRouteDefinition.consumes,
    ),
  ],
  createSupportResourceRouteDefinition.handler,
);

router.delete(
  "/",
  [
    validateRequest(
      deleteSupportResourceValidator,
      deleteSupportResourceRouteDefinition.consumes,
    ),
  ],
  deleteSupportResourceRouteDefinition.handler,
);

router.put(
  "/",
  [
    validateRequest(
      updateSupportResourceValidator,
      updateSupportResourceRouteDefinition.consumes,
    ),
  ],
  updateSupportResourceRouteDefinition.handler,
);

export default router;
