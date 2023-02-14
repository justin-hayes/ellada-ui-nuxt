<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { $service } = nuxtApp;
const route = useRoute();
const { period, tag, classification } = route.query;

const { data } = await useAsyncData(() => $service.artifact.getAll({
    limit: 12,
    period: period?.toString(),
    tag: tag?.toString(),
    classification: classification?.toString()
}));
const imageIds = computed(() => data.value?.items?.map(a => a.imageId) ?? []);
</script>

<template>
    <h1>Artifact Browser</h1>
    <ArtifactGallery :image-ids="imageIds"/>
</template>
