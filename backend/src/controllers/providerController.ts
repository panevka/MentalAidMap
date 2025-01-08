import { Request, Response } from 'express';
import Provider from '../models/Provider';

export const getAllProviders = async (req: Request, res: Response) => {
	try {
		const providers = await Provider.find();
		res.status(200).json(providers);
	} catch (err) {
		res.status(500).json({ message: 'Error fetching providers' });
	}
};
