<script setup lang="ts">
const drawer = ref(false);
</script>

<template>
<v-app>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item><NuxtLink to="/">Home</NuxtLink></v-list-item>
      <v-list-item><NuxtLink to="/artifact">Browse</NuxtLink></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <VAppBar app color="primary">
    <VAppBarNavIcon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></VAppBarNavIcon>
    <VAppBarTitle><NuxtLink to="/" class="app-bar-title">Ellada</NuxtLink></VAppBarTitle>
    <VBtn class="fill-height" to="/artifact">Browse</VBtn>
  </VAppBar>
  <v-main>
    <v-container fluid>
        <slot />
    </v-container>
  </v-main>
</v-app>
</template>
<style scoped>
.app-bar-title {
  text-decoration: none;
  color: inherit;
}
</style>