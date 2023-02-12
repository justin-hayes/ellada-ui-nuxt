import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    ssr: true,
    components: true,
    build: {
        transpile: ['vuetify'],
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL
        }
    },
    nitro: {
        devProxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                prependPath: false,
            }
        }
    },
    modules: [
        async (_, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
              config?.plugins?.push(vuetify());
           });
        }
    ]
});
