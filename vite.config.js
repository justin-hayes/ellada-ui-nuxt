import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
    plugins: [vue(), vuetify()],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: 'vuetify.config.js',
        deps: {
            inline: ['vuetify'],
        },
    },
});