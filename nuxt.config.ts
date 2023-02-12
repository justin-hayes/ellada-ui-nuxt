import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    ssr: false,
    components: true,
    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css",
    ],
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
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) =>
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore TODO try to delete this ts-ignore after vuetify will be stable
              config.plugins.push(vuetify())
            );
          }
    ],
});
