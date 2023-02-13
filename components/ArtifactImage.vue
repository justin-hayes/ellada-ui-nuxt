<script setup lang="ts">

defineProps<{
    imageId: string
}>();

</script>

<template>
      <v-img
        :src="`https://d21vzftmslcfab.cloudfront.net/images/${imageId}.jpg`"
        :lazy-src="`https://d21vzftmslcfab.cloudfront.net/images/${imageId}.jpg`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

</template>