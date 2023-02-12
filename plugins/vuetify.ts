import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg';
const aliases = allAliases;

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: false,
        icons: {
          defaultSet: 'mdi',
          aliases,
          sets: { mdi }
        }
    });

    nuxtApp.vueApp.use(vuetify);
});