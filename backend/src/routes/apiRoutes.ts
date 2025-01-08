import express from 'express';
import { getAllProviders } from '../controllers/providerController';

const router = express.Router();

router.get('/provider', getAllProviders);

export default router;
