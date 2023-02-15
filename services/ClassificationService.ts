import { $Fetch } from 'ofetch';
  
export default class ClassificationService {
    #fetch: $Fetch;

    constructor($fetch: $Fetch) {
        this.#fetch = $fetch;
    }

    async getAll(): Promise<string[]> {
        return this.#fetch('/classification');
    }
}