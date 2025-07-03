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
import { getSupportResources } from "../controllers/supportResourceController";

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

export default router;
