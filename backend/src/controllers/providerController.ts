import { Request, Response } from 'express';
import Provider from '../models/Provider';
import axios from 'axios';

export const getAllProviders = async (req: Request, res: Response) => {

	try {
		interface Query {
			city?: string;
			area?: string;
		}

		const { city, area: areaString = "15" } = req.query as Query;

		if (!city) {
			const providers = await Provider.find();
			res.status(200).json(providers);
			return
		}

		const apiKey = process.env.GEOAPIFY_KEY;
		const apiUrl = 'https://api.geoapify.com/v1/geocode/search'
		const params = {
			city: city,
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

		const area = Number(areaString) || 15;
		const providers = await Provider.find({
			location: {
				$nearSphere: {
					$geometry: {
						type: "Point",
						coordinates: [lon, lat]
					},
					$maxDistance: area * 1000
				}
			}
		})

		if (providers.length === 0) {
			res.status(404).json({ message: 'No providers found with that username' });
			return;
		}

		res.status(200).json(providers);
		return
	} catch (err) {
		res.status(500).json({ message: 'Error fetching providers' });
		return
	}
};
