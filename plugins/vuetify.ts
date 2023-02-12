import { createVuetify } from 'vuetify';

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: false,
    });

    nuxtApp.vueApp.use(vuetify);
});