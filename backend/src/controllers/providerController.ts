import { Request, Response } from 'express';
import { Provider, ProviderAddress } from '../models/Provider';
import axios from 'axios';

interface Query {
	city?: string;
	postCode?: string;
	radius?: string;
}

export const getProviders = async (req: Request, res: Response) => {

	try {
		const { city, postCode, radius } = req.query as Query;
		console.log(city, postCode, radius)
		const apiKey = process.env.GEOAPIFY_KEY;
		const apiUrl = 'https://api.geoapify.com/v1/geocode/search'
		const params = {
			city: city,
			postcode: postCode,
			limit: 1,
			lang: 'pl',
			type: 'city',
			filter: 'countrycode:pl',
			bias: 'countrycode:pl',
			format: 'json',
			apiKey: apiKey,
		};
		const response = await axios.get(apiUrl, { params })
		const { lon, lat } = response.data.results[0]

		const providers = await ProviderAddress.find({
			location: {
				$nearSphere: {
					$geometry: {
						type: "Point",
						coordinates: [lon, lat]
					},
					$maxDistance: Number(radius) * 1000
				}
			}
		})

		if (providers.length === 0) {
			res.status(404).json({ message: 'No providers found' });
			return;
		}

		res.status(200).json(providers);
		return
	} catch (err) {
		res.status(500).json({ message: 'Error fetching providers' });
		console.log(err)
		return
	}
};


interface ProviderDataQuery {
	providerCode?: string;
}
export const getProviderData = async (req: Request, res: Response) => {

	try {
		const { providerCode } = req.query as ProviderDataQuery;
		const provider = await Provider.find({ code: providerCode })
		if (provider.length === 0) {
			res.status(404).json({ message: 'Provider not found' });
			return;
		}

		res.status(200).json(provider);
		return
	} catch (err) {
		res.status(500).json({ message: 'Error fetching provider' });
		console.log(err)
		return
	}
};
