<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { $service } = nuxtApp;

const { data } = await useAsyncData(() => $service.artifact.getRandom());
const imageId = computed(() => data.value?.imageId ?? '');

const hasClassifications = computed(() => data.value?.classifications.length)
const hasTags = computed(() => data.value?.tags.length);

async function fetchRandomImage() {
    data.value = await $service.artifact.getRandom();
}
</script>

<template>
    <VCard class="mx-auto">
        <ArtifactImage :image-id="imageId"/>
        <VCardTitle>{{ data?.name }}</VCardTitle>
        <VCardSubtitle>{{ `${data?.period}, ${data?.date}` }}</VCardSubtitle>
        <VCardText>
            <div v-if="hasClassifications">
                <span class="subheading">Classifications</span>
                <VChipGroup column>
                    <VChip v-for="category in data?.classifications">{{ category.name }}</VChip>
                </VChipGroup>
            </div>
            <div v-if="hasTags">
                <span class="subheading">Tags</span>
                <VChipGroup column>
                    <VChip v-for="tag in data?.tags">{{ tag.name }}</VChip>
                </VChipGroup>
            </div>
        </VCardText>
        <VCardActions>
            <VBtn color="primary" @click="fetchRandomImage">Random</VBtn>
        </VCardActions>
    </VCard>
</template>