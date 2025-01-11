export interface Coordinates {
	lon: number;
	lat: number;
}

export interface Facility {
	providerId: string;
	name: string;
	branch: string;
	city: string;
	"post-code": string;
	"house-number": string;
	"commune": string;
	coordinates: Coordinates;
}
