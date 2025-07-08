interface ILocation {
  type: "Point";
  coordinates: [number, number];
}

export interface IProviderAddress {
  code: string;
  city: string;
  street: string;
  building_number: string;
  district: string;
  post_code: string;
  voivodeship: string;
  location: ILocation;
}
