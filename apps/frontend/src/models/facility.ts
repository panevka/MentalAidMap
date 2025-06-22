interface Location {
  type: "Point";
  coordinates: [number, number];
}

export interface Facility {
  code: string;
  nip: string;
  regon: string;
  registry_number: string;
  name: string;
  phone?: string;
  agreements: string[];
}

export interface FacilityAddress {
  code: string;
  city: string;
  street: string;
  building_number: string;
  district: string;
  post_code: string;
  voivodeship: string[];
  location: Location;
}

export interface SearchFacilitiesParams {
  city: string;
  postCode: string;
  radius: number;
}

export interface GetFacilityDataParams {
  providerCode: string;
}
