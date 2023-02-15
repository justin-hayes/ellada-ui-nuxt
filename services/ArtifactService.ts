import { $Fetch } from 'ofetch';

export interface Artifact {
    name: string
    title: string
    period: string
    imageId: string
    date: string
    tags: Tag[]
    classifications: Classification[]
}

interface Tag {
    name: string
}

interface Classification {
    name: string
}

interface SearchParams {
    page?: number
    limit?: number
    period?: string
    classification?: string
    tag?: string
}

interface Meta {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
}
  
export interface ArtifactResponse {
    meta: Meta
    items: Artifact[]
}
  
export default class ArtifactService {
    #fetch: $Fetch;

    constructor($fetch: $Fetch) {
        this.#fetch = $fetch;
    }

    async getAll(query: SearchParams = {page: 1, limit: 10}): Promise<ArtifactResponse> {
        return this.#fetch('/artifact', {
            query
        });
    }

    async getRandom(): Promise<Artifact> {
        return this.#fetch('/random/artifact');
    }
}