import { Request, Response } from 'express';
import Provider from '../models/Provider';
import axios from 'axios';

export const getProviders = async (req: Request, res: Response) => {

	const validateRadius = (radiusString?: string | null): number => {
		const radius = Number(radiusString);
		return radius > 0 ? radius : 15;
	};

	try {
		interface Query {
			city?: string;
			postCode?: string;
			radius?: string;
		}

		const { city, postCode, radius: radiusString = "15" } = req.query as Query;

		if (!city) {
			const providers = await Provider.find();
			res.status(200).json(providers);
			return
		}

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

		const radius = validateRadius(radiusString)

		const providers = await Provider.find({
			location: {
				$nearSphere: {
					$geometry: {
						type: "Point",
						coordinates: [lon, lat]
					},
					$maxDistance: radius * 1000
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
		return
	}
};
