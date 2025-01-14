interface Location {
	type: "Point";
	coordinates: [number, number];
}

export interface Facility {
	"provider-code": string;
	branch: string;
	city: string;
	street: string;
	"house-number": string;
	"commune": string;
	"post-code": string;
	location: Location;
}

export interface SearchFacilitiesParams {
	city: string;
	postCode: string;
	area: number;
}
