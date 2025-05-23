import httpInstance from "../../shared/services/http.instance.js";

export class ApartmentsService {
    constructor() {
        this.resourceEndpoint = import.meta.env.VITE_APARTMENTS_ENDPOINT_PATH;
    }

    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }
    
    update(id, data) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, data);
    }
}