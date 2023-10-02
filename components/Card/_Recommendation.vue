<template>
    <div class="flex h-full flex-col gap-4 group/cardR relative">
        <div class="w-full h-189px sm:h-219px lg:h-273px overflow-hidden rounded-3.75 [&>img]:(h-full w-full group-hover/cardR:scale-110 object-cover transition-transform duration-300 ease-linear)" v-html="img"></div>
        <p class="px-3 py-1.5 text-sm font-medium leading-1.2 text-tag bg-tag2/12 w-fit rounded-1.25">{{ generalConfig?.static_info?.global_words?.ot_people?.replace('%s', price) }}</p>
        <p class="leading-1.2 text-fblack font-semibold text-lg lg:text-5.5">{{ title }}</p>
        <CustomLink class="absolute inset-0" :to="slug"></CustomLink>
    </div>
</template>
<script setup>
defineProps({
    img: String,
    price: Number,
    title: String,
    slug: String,
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>
