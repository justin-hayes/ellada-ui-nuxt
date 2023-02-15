import { $Fetch } from 'ofetch';
  
export default class TagService {
    #fetch: $Fetch;

    constructor($fetch: $Fetch) {
        this.#fetch = $fetch;
    }

    async getAll(): Promise<string[]> {
        return this.#fetch('/tag');
    }
}