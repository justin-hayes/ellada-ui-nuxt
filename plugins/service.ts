import { $fetch, FetchOptions } from 'ofetch';
import ArtifactService from '~~/services/ArtifactService';
import ClassificationService from '~~/services/ClassificationService';
import TagService from '~~/services/TagService';

export interface ServiceApi {
    artifact: ArtifactService
    tag: TagService
    classification: ClassificationService
}

export default defineNuxtPlugin(nuxtApp => {
    const fetchOptions: FetchOptions = {
        baseURL: nuxtApp.$config.API_BASE_URL,
    }
    
    const apiFetcher = $fetch.create(fetchOptions);

    const services: ServiceApi = {
        artifact: new ArtifactService(apiFetcher),
        tag: new TagService(apiFetcher),
        classification: new ClassificationService(apiFetcher),
    };

    return {
        provide: {
            service: services,
        },
    };
})