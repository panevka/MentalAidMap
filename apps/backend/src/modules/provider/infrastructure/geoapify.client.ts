import { EnvManager } from "src/lib/env/env-manager";
import axios from "axios";

export class GeoapifyClient {
  private apiUrl = "https://api.geoapify.com/v1/geocode/search";

  async getCoordinatesBySearchText(searchText: string) {
    const unstructuredSearchParams = {
      text: searchText,
      limit: 1,
      lang: "pl",
      type: "amenity",
      filter: "countrycode:pl",
      bias: "countrycode:pl",
      format: "json",
      apiKey: EnvManager.GEOAPIFY_KEY,
    };

    const response = await axios.get(this.apiUrl, {
      params: unstructuredSearchParams,
    });

    return response.data.results[0];
  }
}
