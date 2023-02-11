import { $fetch, FetchOptions } from 'ofetch';
import ArtifactService from '~~/services/ArtifactService';

export interface ServiceApi {
    artifact: ArtifactService
}

export default defineNuxtPlugin(nuxtApp => {
    const fetchOptions: FetchOptions = {
        baseURL: nuxtApp.$config.API_BASE_URL,
    }
    
    const apiFetcher = $fetch.create(fetchOptions);

    const services: ServiceApi = {
        artifact: new ArtifactService(apiFetcher),
    };

    return {
        provide: {
            service: services,
        },
    };
})