import httpInstance from "../../shared/services/http.instance.js";

export class CitiesService {
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_BASE_URL;
        this.resourcePath = import.meta.env.VITE_CITIES_ENDPOINT_PATH;
        this.resourceEndpoint = `${this.baseUrl}${this.resourcePath}`;
    }

    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }
}