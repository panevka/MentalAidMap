import axios from "axios";

export class GeoapifyClient {
  private apiKey = process.env.GEOAPIFY_KEY!;
  private apiUrl = "https://api.geoapify.com/v1/geocode/search";

  async getCoordinates(city: string, postCode: string) {
    const params = {
      city,
      postcode: postCode,
      limit: 1,
      lang: "pl",
      type: "city",
      filter: "countrycode:pl",
      bias: "countrycode:pl",
      format: "json",
      apiKey: this.apiKey,
    };

    const response = await axios.get(this.apiUrl, { params });
    return response.data.results[0];
  }
}
