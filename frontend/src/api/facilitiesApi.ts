import axios from 'axios';
import { SearchFacilitiesParams } from '@/models/facility';
const API_URL = 'http://localhost:5000/api/provider';

export const searchFacilities = async (params: SearchFacilitiesParams) => {
	try {
		const response = await axios.get(`${API_URL}`, { params });
		return response.data;
	} catch (error) {
		console.error('Error fetching facilities:', error);
		throw new Error('Unable to fetch facilities');
	}
};
