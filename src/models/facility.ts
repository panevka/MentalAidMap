interface Location {
	type: "Point";
	coordinates: [number, number];
}

export interface Facility {
	providerId: string;
	name: string;
	branch: string;
	city: string;
	"post-code": string;
	"house-number": string;
	"commune": string;
	location: Location;
}
