import { $Fetch } from 'ofetch';

export interface Artifact {
    imageId: string
}
  
export interface ArtifactResponse {
    items: Artifact[]
}
  
export default class ArtifactService {
    #fetch: $Fetch;

    constructor($fetch: $Fetch) {
        this.#fetch = $fetch;
    }

    async getAll({page = 1, limit = 10}: {page?: number, limit?: number}): Promise<ArtifactResponse> {
        return this.#fetch(`/artifact?limit=${limit}`);
    }
}