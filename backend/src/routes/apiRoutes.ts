import express from 'express';
import { getProviders } from '../controllers/providerController';
import { validateRequest } from '../middleware/validator';
import { providersQueryValidator } from '../validators';

const router = express.Router();

router.get('/provider', [validateRequest(providersQueryValidator)], getProviders);

export default router;
