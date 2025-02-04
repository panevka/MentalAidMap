import axios from 'axios';
import { GetFacilityDataParams, SearchFacilitiesParams } from '@/models/facility';
const API_URI = import.meta.env.VITE_API_URL;

export const searchFacilities = async (params: SearchFacilitiesParams) => {
	const endpoint = "provider"
	try {
		const response = await axios.get(`${API_URI}/${endpoint}`, { params });
		return response.data;
	} catch (error) {
		console.error('Error fetching facilities:', error);
		throw new Error('Unable to fetch facilities');
	}
};

export const getFacilityData = async (params: GetFacilityDataParams) => {
	const endpoint = "provider-data"
	try {
		const response = await axios.get(`${API_URI}/${endpoint}`, { params });
		return response.data;
	} catch (error) {
		console.error('Error fetching facility data:', error);
		throw new Error('Unable to fetch facility');
	}
};
