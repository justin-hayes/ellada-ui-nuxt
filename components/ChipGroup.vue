<script setup lang="ts">
interface ChipGroupProps {
    title: string
    chips: string[]
    filter: string
    wrap?: boolean
}

const { title, chips, wrap = false } = defineProps<ChipGroupProps>();

function navigateToArtifactBrowser(filter: string, value: string) {
    const query: Record<string, string> = {};
    query[filter] = value;
    
    navigateTo({
        path: '/artifact',
        query
    });
}
</script>

<template>
    <span class="subheading">{{ title }}</span>
    <VChipGroup :column="wrap">
        <VChip v-for="chip in chips" size="small" @click="navigateToArtifactBrowser(filter, chip)">{{ chip }}</VChip>
    </VChipGroup>
</template>