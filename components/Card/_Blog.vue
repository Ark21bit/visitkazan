<template>
    <div class="flex h-full flex-col rounded-2.5 lg:rounded-3.75 bg-white overflow-hidden shadow-[0_4px_23px_0_#0001] ring-(2 transparent) hover:ring-fblue transition-shadow duration-500 ease-linear">
        <div class="h-204px sm:h-237px lg:h-230px [&>img]:(w-full h-full object-cover)" v-html="img">
        </div>
        <div class="flex flex-col flex-cal gap-4 p-5 border-b border-fline grow">
            <h3 class="text-fblack text-lg font-semibold leading-1.2 grow line-clamp-3">{{ title }}</h3>
            <p class="text-sm text-fmain leading-1.4 h-60px line-clamp-3">{{ description }}</p>
        </div>
        <div class="p-5">
            <Button class="w-full" :to="slug" :tag="CustomLink">{{ generalConfig?.static_info?.global_words?.more }}</Button>
        </div>
    </div>
</template>
<script setup>
const CustomLink = resolveComponent('CustomLink')
defineProps({
    title: String,
    description: String,
    slug: String,
    img: String,
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>
