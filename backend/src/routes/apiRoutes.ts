import express from 'express';
import { getProviders } from '../controllers/providerController';

const router = express.Router();

router.get('/provider', getProviders);

export default router;
