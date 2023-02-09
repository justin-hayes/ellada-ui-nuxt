<script setup lang="ts">
defineProps<{
    imageIds: string[]
}>();
</script>

<template>
  <v-row dense>
    <v-col
      v-for="imageId in imageIds"
      :key="imageId"
      class="d-flex child-flex"
      cols="3"
    >
      <ArtifactImage :image-id="imageId" />
    </v-col>
  </v-row>
</template>