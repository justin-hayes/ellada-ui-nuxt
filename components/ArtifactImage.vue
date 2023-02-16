<script setup lang="ts">
defineProps<{
    imageId: string
}>();

</script>

<template>
      <VImg
        :src="`https://d21vzftmslcfab.cloudfront.net/images/${imageId}.jpg`"
        :lazy-src="`https://d21vzftmslcfab.cloudfront.net/images/${imageId}.jpg`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <VRow
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <VProgressCircular
              indeterminate
              color="grey-lighten-5"
            ></VProgressCircular>
          </VRow>
        </template>
      </VImg>
</template>