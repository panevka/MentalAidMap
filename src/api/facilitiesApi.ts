import axios from 'axios';
import { Facility } from '@/models/facility';
const API_URL = 'http://localhost:5000/api/provider';

export interface SearchFacilitiesParams {
	city: string;
	area?: number;
}

export const searchFacilities = async (params: SearchFacilitiesParams) => {
	try {
		const response = await axios.get(`${API_URL}`, { params });
		return response.data;
	} catch (error) {
		console.error('Error fetching facilities:', error);
		throw new Error('Unable to fetch facilities');
	}
};
