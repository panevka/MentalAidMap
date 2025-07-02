import express from "express";
import {
  getProviderData,
  getProviders,
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
  [validateRequest(providersQueryValidator)],
  getProviders,
);

router.get(
  "/provider-data",
  [validateRequest(providersDataQueryValidator)],
  getProviderData,
);

router.get("/support-resources", getSupportResources);

export default router;
