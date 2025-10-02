import express from "express";
import { validateRequest } from "../../../lib/middleware/validation.middleware";
import { SupportResourceController } from "./support-resource.controller";
// import {
//   createSupportResourceRouteDefinition,
//   deleteSupportResourceRouteDefinition,
//   getSupportResources,
//   updateSupportResourceRouteDefinition,
// } from "./ci";
// import {
//   createSupportResourceValidator,
//   deleteSupportResourceValidator,
//   updateSupportResourceValidator,
// } from "../support-resource.validator";

const router = express.Router();
const controller = new SupportResourceController();

router.get("/", controller.getSupportResources);

// router.post(
//   "/",
//   [
//     validateRequest(
//       createSupportResourceValidator,
//       createSupportResourceRouteDefinition.consumes,
//     ),
//   ],
//   createSupportResourceRouteDefinition.handler,
// );

// router.delete(
//   "/",
//   [
//     validateRequest(
//       deleteSupportResourceValidator,
//       deleteSupportResourceRouteDefinition.consumes,
//     ),
//   ],
//   deleteSupportResourceRouteDefinition.handler,
// );
//
// router.put(
//   "/",
//   [
//     validateRequest(
//       updateSupportResourceValidator,
//       updateSupportResourceRouteDefinition.consumes,
//     ),
//   ],
//   updateSupportResourceRouteDefinition.handler,
// );

export default router;
