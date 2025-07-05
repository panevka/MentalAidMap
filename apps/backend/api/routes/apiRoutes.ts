import express from "express";
import {
  getProviderDataRouteDefinition,
  getProvidersRouteDefinition,
} from "../controllers/providerController";
import { validateRequest } from "../middleware/validator";
import {
  providersDataQueryValidator,
  providersQueryValidator,
} from "../validators/providerValidator";
import {
  createSupportResourceRouteDefinition,
  deleteSupportResourceRouteDefinition,
  getSupportResources,
} from "../controllers/supportResourceController";
import {
  createSupportResourceValidator,
  deleteSupportResourceValidator,
} from "../validators/supportResourceValidator";

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

export default router;
