// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "nuxt-icon", "@formkit/nuxt", "@unocss/nuxt", "@nuxtjs/i18n"],
    components: [
        "~/components/atoms",
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
    devtools: { enabled: true },
    css: ["~/assets/fonts/nekst/style.css", "~/assets/css/tailwind.css"],
    i18n: {        
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
    }
});