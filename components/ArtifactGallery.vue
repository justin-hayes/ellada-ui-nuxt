<script setup lang="ts">
defineProps<{
    imageIds: string[]
}>();
</script>

<template>
  <div class="gallery">
    <ArtifactImage
      v-for="imageId in imageIds"
      :key="imageId"
      :image-id="imageId" />
  </div>
</template>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(3, 33%);
    grid-gap: 5px;
    height: 85vh;
}

.gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>