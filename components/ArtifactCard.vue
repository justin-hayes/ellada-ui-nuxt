<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { $service } = nuxtApp;

const { data } = await useAsyncData(() => $service.artifact.getRandom());
const imageId = computed(() => data.value?.imageId ?? '');

const classifications = computed(() => data.value?.classifications.map(c => c.name) ?? []);
const hasClassifications = computed(() => classifications.value.length);
const tags = computed(() => data.value?.tags.map(t => t.name) ?? []);
const hasTags = computed(() => tags.value.length);

async function fetchRandomImage() {
    data.value = await $service.artifact.getRandom();
}
</script>

<template>
    <VCard class="mx-auto">
        <ArtifactImage :image-id="imageId"/>
        <VCardTitle>{{ data?.name }}</VCardTitle>
        <VCardSubtitle><NuxtLink :to="`/artifact?period=${data?.period}`">{{ data?.period }}</NuxtLink> period, {{ data?.date }}</VCardSubtitle>
        <VCardText>
            <ChipGroup v-if="hasClassifications" title="Classifications" :chips="classifications" filter="classification" :wrap="true" />
            <ChipGroup v-if="hasTags" title="Tags" :chips="tags" filter="tag" :wrap="true" />
        </VCardText>
        <VCardActions>
            <VBtn color="primary" @click="fetchRandomImage">Random</VBtn>
        </VCardActions>
    </VCard>
</template>