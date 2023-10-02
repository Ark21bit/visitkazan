// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "nuxt-icon", "@formkit/nuxt", "@unocss/nuxt", "@nuxtjs/i18n", '@pinia/nuxt', '@formkit/auto-animate/nuxt', "dayjs-nuxt"],
    components: [
        "~/components/atoms",
        "~/components/atoms/toasts",
        "~/components/atoms/tabs",
        "~/components/reviews",
        "~/components",
        { path: "~/components/global", global: true },
    ],
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) =>
                ["swiper-container", "swiper-slide"].includes(tag),
        },
    },
    runtimeConfig: {
        public: {
            APIbaseURL: process.env.APP_URL_BACKEND
        }
    },
    devtools: { enabled: true },
    css: ["~/assets/fonts/nekst/style.css", "~/assets/css/main.css"],
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        detectBrowserLanguage: false,
    },

    imports: {
        dirs: ["stores"],
    },
    build: {
        transpile: ['@vuepic/vue-datepicker'],
    },
    pinia: {
        autoImports: [
            "defineStore",
            ["defineStore", "definePiniaStore"],
            "storeToRefs",
            'skipHydrate',
        ],
    },
    dayjs: {
        locales: ['en', 'ru'],
        plugins: ['utc', 'timezone', 'localizedFormat'],
        defaultLocale: 'ru',
        defaultTimezone: 'Europe/Moscow',
    },
    postcss: {
        plugins: {
            cssnano: false
        }
    }
});