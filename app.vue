<script setup lang="ts">
interface Artifact {
  imageId: string
}

interface ArtifactResponse {
  items: Artifact[]
}

const { data } = await useFetch<ArtifactResponse>('/api/artifact?limit=12');
const artifacts: Artifact[] = data.value?.items ?? []
const imageIds = artifacts.map(a => a.imageId);
</script>

<template>
<v-app>
  <v-main>
    <v-container fluid>
      <h1>Hello world!</h1>
      <ArtifactGallery :image-ids="imageIds"></ArtifactGallery>
    </v-container>
  </v-main>
</v-app>
</template>
