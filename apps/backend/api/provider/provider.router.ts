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

const router = express.Router();

router.get(
  "/",
  [
    validateRequest(
      providersQueryValidator,
      getProvidersRouteDefinition.consumes,
    ),
  ],
  getProvidersRouteDefinition.handler,
);

router.get(
  "/data",
  [
    validateRequest(
      providersDataQueryValidator,
      getProvidersRouteDefinition.consumes,
    ),
  ],
  getProviderDataRouteDefinition.handler,
);

export default router;
