<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { $service } = nuxtApp;

const { data } = useAsyncData('artifacts', () => $service.artifact.getAll({limit: 12}));
const imageIds = computed(() => data.value?.items.map(a => a.imageId) ?? []);
</script>

<template>
    <ArtifactGallery :image-ids="imageIds"></ArtifactGallery>
</template>