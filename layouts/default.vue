<script setup lang="ts">
const drawer = ref(false);
</script>

<template>
<v-app>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item><NuxtLink to="/">Home</NuxtLink></v-list-item>
      <v-list-item><NuxtLink to="/artifact">Browse</NuxtLink></v-list-item>
      <v-list-item>Bar</v-list-item>
      <v-list-item>Baz</v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar app color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Ellada</v-app-bar-title>
  </v-app-bar>

  <v-main>
    <v-container fluid>
        <slot />
    </v-container>
  </v-main>
</v-app>
</template>