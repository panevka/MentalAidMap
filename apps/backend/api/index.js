"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_express4 = __toESM(require("express"));
var import_mongoose4 = __toESM(require("mongoose"));

// src/lib/middleware/router.middleware.ts
var import_express3 = __toESM(require("express"));

// src/modules/provider/api/provider.router.ts
var import_express = __toESM(require("express"));

// src/lib/middleware/validation.middleware.ts
var import_zod = require("zod");
var validateRequest = (validator, dataSource) => async (req, res, next) => {
  try {
    switch (dataSource) {
      case "params" /* Params */:
        await validator.parseAsync(req.params);
        break;
      case "query" /* Query */:
        await validator.parseAsync(req.query);
        break;
      case "body" /* Body */:
        await validator.parseAsync(req.body);
        break;
      default:
        res.status(500).json({ msg: "Invalid data source type." });
        return;
    }
    next();
  } catch (error) {
    if (error instanceof import_zod.ZodError) {
      res.status(400).json({
        status: "error",
        errors: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message
        }))
      });
      return;
    }
    res.status(500).json({ msg: "Internal server error." });
    return;
  }
};

// src/modules/provider/application/provider.validator.ts
var import_zod2 = require("zod");
var getProvidersValidator = import_zod2.z.object({
  search: import_zod2.z.string().min(1, "Search phrase cannot be empty").max(255, "Search phrase too long").regex(
    /^[\p{L}\p{N}. ,_-]+$/u,
    "Invalid characters detected. Allowed: letters, numbers, spaces, _, -"
  )
});
var getProviderDataValidator = import_zod2.z.object({
  providerCode: import_zod2.z.string().min(1, "Cannot be empty").max(255, "Input too long").regex(
    /^[\p{L}\p{N}/ _-]+$/u,
    "Invalid characters detected. Allowed: letters, numbers, spaces, _, -"
  )
});

// src/modules/provider/application/provider.service.ts
var ProviderService = class {
  constructor(repo, geoapify) {
    this.repo = repo;
    this.geoapify = geoapify;
  }
  async getProviders(searchPhrase) {
    const { lon, lat } = await this.geoapify.getCoordinatesBySearchText(searchPhrase);
    return this.repo.findNearLocation([lon, lat], 30);
  }
  async getProviderData(providerCode) {
    return this.repo.findByCode(providerCode);
  }
};

// src/lib/env/env-manager.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var EnvManager = class _EnvManager {
  constructor() {
    throw new Error("A static class cannot be instantiated.");
  }
  static {
    this.PORT = _EnvManager.getNumber("PORT", 3001);
  }
  static {
    this.MONGODB_URI = _EnvManager.getString("MONGODB_URI");
  }
  static {
    this.GEOAPIFY_KEY = _EnvManager.getString("GEOAPIFY_KEY");
  }
  static getString(key, defaultValue) {
    const value = process.env[key];
    if (value !== void 0) return value;
    if (defaultValue !== void 0) return defaultValue;
    throw new Error(`Missing required environment variable: ${key}`);
  }
  static getNumber(key, defaultValue) {
    const value = process.env[key];
    if (value !== void 0 && !isNaN(Number(value))) return Number(value);
    if (defaultValue !== void 0) return defaultValue;
    throw new Error(
      `Missing or invalid number for environment variable: ${key}`
    );
  }
};

// src/modules/provider/infrastructure/geoapify.client.ts
var import_axios = __toESM(require("axios"));
var GeoapifyClient = class {
  constructor() {
    this.apiUrl = "https://api.geoapify.com/v1/geocode/search";
  }
  async getCoordinatesBySearchText(searchText) {
    const unstructuredSearchParams = {
      text: searchText,
      limit: 1,
      lang: "pl",
      type: "amenity",
      filter: "countrycode:pl",
      bias: "countrycode:pl",
      format: "json",
      apiKey: EnvManager.GEOAPIFY_KEY
    };
    const response = await import_axios.default.get(this.apiUrl, {
      params: unstructuredSearchParams
    });
    return response.data.results[0];
  }
};

// src/modules/provider/infrastructure/provider.schema.ts
var import_mongoose = __toESM(require("mongoose"));
var ProviderSchema = new import_mongoose.Schema(
  {
    code: { type: String, required: true },
    nip: { type: String, required: true },
    regon: { type: String, required: true },
    registry_number: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true, default: null },
    agreements: { type: [String], required: true, default: [] }
  },
  { collection: "Providers" }
);
var ProviderModel = import_mongoose.default.model(
  "Provider",
  ProviderSchema
);

// src/modules/provider/infrastructure/provider-address.schema.ts
var import_mongoose2 = __toESM(require("mongoose"));
var LocationSchema = new import_mongoose2.Schema({
  type: { type: String, enum: ["Point"], required: true },
  coordinates: { type: [Number], required: true }
});
var ProviderAddressSchema = new import_mongoose2.Schema(
  {
    code: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    building_number: { type: String, required: true },
    district: { type: String, required: true },
    post_code: { type: String, required: true },
    voivodeship: { type: String, required: true },
    location: { type: LocationSchema, required: true }
  },
  { collection: "ProviderAddresses" }
);
var ProviderAddressModel = import_mongoose2.default.model(
  "ProviderAddress",
  ProviderAddressSchema
);

// src/modules/provider/infrastructure/provider.repository.ts
var ProviderRepository = class {
  async findByCode(code) {
    return ProviderModel.findOne({ code });
  }
  async findNearLocation(coordinates, radius) {
    return ProviderAddressModel.find({
      location: {
        $nearSphere: {
          $geometry: { type: "Point", coordinates },
          $maxDistance: radius * 1e3
        }
      }
    });
  }
};

// src/modules/provider/api/provider.controller.ts
var service = new ProviderService(
  new ProviderRepository(),
  new GeoapifyClient()
);
var ProviderController = class {
  async getProviders(req, res) {
    try {
      const searchedPhrase = req.query?.search;
      if (typeof searchedPhrase !== "string") {
        return res.status(400).json({ message: "No search phrase provided" });
      }
      const providers = await service.getProviders(searchedPhrase);
      if (!providers || providers.length === 0) {
        return res.status(404).json({ message: "No providers found" });
      }
      return res.json(providers);
    } catch (e2) {
      console.error(e2);
      return res.status(500).json({ message: "Error fetching providers" });
    }
  }
  async getProviderData(req, res) {
    const providerCode = req.query.providerCode;
    if (typeof providerCode !== "string") {
      return res.status(400).json({ message: "No provider code provided" });
    }
    try {
      const provider = await service.getProviderData(providerCode);
      if (!provider) {
        return res.status(404).json({ message: "Provider not found" });
      }
      return res.json(provider);
    } catch (e2) {
      console.error(e2);
      return res.status(500).json({ message: "Error fetching provider" });
    }
  }
};

// src/modules/provider/api/provider.router.ts
var router = import_express.default.Router();
var controller = new ProviderController();
router.get(
  "/",
  [validateRequest(getProvidersValidator, "query" /* Query */)],
  controller.getProviders
);
router.get("/data", [
  validateRequest(getProviderDataValidator, "query" /* Query */),
  controller.getProviderData
]);
var provider_router_default = router;

// src/modules/simplified-support-resource/api/simplified-support-resource.router.ts
var import_express2 = __toESM(require("express"));

// src/modules/simplified-support-resource/application/simplified-support-resource.service.ts
var SimplifiedSupportResourceService = class {
  constructor(repo) {
    this.repo = repo;
  }
  async getSupportResources() {
    const supportResources = await this.repo.findAll();
    return supportResources;
  }
};

// src/modules/simplified-support-resource/infrastructure/simplified-support-resource.schema.ts
var import_mongoose3 = require("mongoose");
var SimplifiedSupportResourceSchema = new import_mongoose3.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: ""
    },
    tags: {
      type: [String],
      default: []
    },
    ageRange: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 }
    },
    phone: {
      type: String,
      default: null
    },
    email: {
      type: String,
      default: null
    },
    website: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    }
  },
  {
    versionKey: false,
    collection: "SimplifiedSupportResources"
  }
);
var SimplifiedSupportResourceModel = (0, import_mongoose3.model)(
  "SimplifiedSupportResource",
  SimplifiedSupportResourceSchema
);

// src/modules/simplified-support-resource/infrastructure/simplified-support-resource.repository.ts
var SimplifiedSupportResourceRepository = class {
  async findAll() {
    return SimplifiedSupportResourceModel.find().exec();
  }
};

// src/modules/simplified-support-resource/api/simplified-support-resource.controller.ts
var service2 = new SimplifiedSupportResourceService(
  new SimplifiedSupportResourceRepository()
);
var SimplifiedSupportResourceController = class {
  async getSupportResources(_, res) {
    try {
      const supportResources = await service2.getSupportResources();
      if (!supportResources) {
        return res.status(404).json({ message: "No support resources found" });
      }
      return res.json(supportResources);
    } catch {
      console.error(e);
      return res.status(500).json({ message: "Error fetching support resources" });
    }
  }
};

// src/modules/simplified-support-resource/api/simplified-support-resource.router.ts
var router2 = import_express2.default.Router();
var controller2 = new SimplifiedSupportResourceController();
router2.get("/", controller2.getSupportResources);
var simplified_support_resource_router_default = router2;

// src/lib/middleware/router.middleware.ts
var router3 = import_express3.default.Router();
router3.use("/provider", provider_router_default);
router3.use("/support-resource", simplified_support_resource_router_default);
var router_middleware_default = router3;

// src/lib/middleware/common.middleware.ts
var import_cors = __toESM(require("cors"));
var import_body_parser = __toESM(require("body-parser"));
var setupCommonMiddleware = (app2) => {
  app2.use((0, import_cors.default)());
  app2.use(import_body_parser.default.json());
};

// src/index.ts
var app = (0, import_express4.default)();
import_mongoose4.default.connect(EnvManager.MONGODB_URI).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));
setupCommonMiddleware(app);
app.set("trust proxy", true);
app.use("/api", router_middleware_default);
app.listen(
  EnvManager.PORT,
  () => console.log(`Server running on port: ${EnvManager.PORT}`)
);
var index_default = (req, res) => {
  return app(req, res);
};
//# sourceMappingURL=index.js.map