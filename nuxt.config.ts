// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/fonts/nekst/style.css", "~/assets/css/tailwind.css"],
    components: [
        "~/components/atoms",
        "~/components/atoms/tabs",
        "~/components/reviews",
        "~/components",
        { path: "~/components/global", global: true },
    ],
    modules: ["@vueuse/nuxt", "nuxt-icon", "@formkit/nuxt", "@unocss/nuxt"],
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) =>
                ["swiper-container", "swiper-slide"].includes(tag),
        },
    },
});