<script setup lang="ts">
definePageMeta({
    middleware: (to) => {
        if (!to.query.page) {
            return navigateTo({
                path: '/artifact',
                query: { ...to.query, page: 1 }
            });
        }
    }
});

const nuxtApp = useNuxtApp();
const route = useRoute();
const router = useRouter();

const { $service } = nuxtApp;
const { page, period, tag, classification } = route.query;
const pageRef = ref(parseInt(page?.toString() || '1'));
const periodRef = ref(period);
const tagRef = ref(tag);
const classificationRef = ref(classification);

const { data } = await useAsyncData(() => {
    router.push({ query: {
        page: pageRef.value,
        period: periodRef.value,
        tag: tagRef.value || undefined,
        classification: classificationRef.value
    }});

    return $service.artifact.getAll({
        page: pageRef.value,
        limit: 12,
        period: periodRef.value?.toString(),
        tag: tagRef.value?.toString(),
        classification: classificationRef.value?.toString()
    })
}, {
    watch: [pageRef, periodRef, tagRef, classificationRef]
});

const { data: tagData } = await useAsyncData(() => $service.tag.getAll());
const tags = computed(() => tagData.value || []);
const { data: classifications } = await useAsyncData(() => $service.classification.getAll());
const imageIds = computed(() => data.value?.items?.map(a => a.imageId) ?? []);
const totalPages = computed(() => data.value?.meta.totalPages ?? 1);
watch(data, () => {
    const meta = data.value?.meta;
    if (meta && meta.currentPage > meta.totalItems) {
        pageRef.value = 1;
    }
});
watch([periodRef, tagRef, classificationRef], () => pageRef.value = 1);
</script>

<template>
    <div class="gallery">
        <VRow>
            <VCol cols="3">
                <div>
                    <h2>Period</h2>
                    <VChipGroup v-model="periodRef">
                        <VChip value="Archaic">Archaic</VChip>
                        <VChip value="Classical">Classical</VChip>
                        <VChip value="Hellenistic">Hellenistic</VChip>
                    </VChipGroup>
                </div>
                <div>
                    <h2>Classification</h2>
                    <VChipGroup v-model="classificationRef" column>
                        <VChip v-for="classification in classifications" :value="classification">{{ classification }}</VChip>
                    </VChipGroup>
                </div>
                <div>
                    <h2>Tag</h2>
                    <VAutocomplete label="Tag" clearable :items="tags" v-model="tagRef"/>
                </div>

            </VCol>
            <VCol cols="9">
                <ArtifactGallery :image-ids="imageIds"/>
                <VPagination v-model="pageRef" :length="totalPages" :total-visible="7"></VPagination>
            </VCol>
        </VRow>
    </div>
</template>

<style scoped>
.gallery {
    max-height: 83vh;
}
</style>