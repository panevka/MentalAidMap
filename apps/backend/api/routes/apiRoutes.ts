import express from "express";
import {
  getProviderDataRouteDefinition,
  getProvidersRouteDefinition,
} from "../provider/provider.controller";
import { validateRequest } from "../middleware/validation.middleware";
import {
  providersDataQueryValidator,
  providersQueryValidator,
} from "../provider/provider.validator";
import {
  createSupportResourceRouteDefinition,
  deleteSupportResourceRouteDefinition,
  getSupportResources,
  updateSupportResourceRouteDefinition,
} from "../support-resource/support-resource.controller";
import {
  createSupportResourceValidator,
  deleteSupportResourceValidator,
  updateSupportResourceValidator,
} from "../support-resource/support-resource.validator";

const router = express.Router();

router.get(
  "/provider",
  [
    validateRequest(
      providersQueryValidator,
      getProvidersRouteDefinition.consumes,
    ),
  ],
  getProvidersRouteDefinition.handler,
);

router.get(
  "/provider-data",
  [
    validateRequest(
      providersDataQueryValidator,
      getProvidersRouteDefinition.consumes,
    ),
  ],
  getProviderDataRouteDefinition.handler,
);

router.get("/support-resources", getSupportResources);

router.post(
  "/support-resources",
  [
    validateRequest(
      createSupportResourceValidator,
      createSupportResourceRouteDefinition.consumes,
    ),
  ],
  createSupportResourceRouteDefinition.handler,
);

router.delete(
  "/support-resources",
  [
    validateRequest(
      deleteSupportResourceValidator,
      deleteSupportResourceRouteDefinition.consumes,
    ),
  ],
  deleteSupportResourceRouteDefinition.handler,
);

router.put(
  "/support-resources",
  [
    validateRequest(
      updateSupportResourceValidator,
      updateSupportResourceRouteDefinition.consumes,
    ),
  ],
  updateSupportResourceRouteDefinition.handler,
);

export default router;
