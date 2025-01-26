import express from 'express';
import { getProviderData, getProviders } from '../controllers/providerController';
import { validateRequest } from '../middleware/validator';
import { providersDataQueryValidator, providersQueryValidator } from '../validators';

const router = express.Router();

router.get('/provider', [validateRequest(providersQueryValidator)], getProviders);
router.get('/provider-data', [validateRequest(providersDataQueryValidator)], getProviderData);

export default router;
