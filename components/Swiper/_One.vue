<template>
    <Swiper class="w-full flex overflow-hidden relative" :options="options">
        <swiper-slide class="w-full h-full shrink-0 relative" v-for="img in images">
            <div v-html="img?.html" class="w-full h-full [&>img]:(w-full h-full object-cover object-center)"></div>
            <div class="absolute inset-0 bg-black/25"></div>
        </swiper-slide>
        <div slot="container-end" class="absolute bottom-12 lg:bottom-15 z-1 w-full">
            <div class="wrapper flex gap-4 justify-center sm:justify-between items-center max-lg:flex-wrap">
                <SwiperButton class="prev rotate-180 max-sm:order-1"></SwiperButton>
                <h2 class="font-Nekst text-white text-xl lg:text-4xl leading-1.1 lg:leading-1.2 max-sm:w-full text-center">{{ title }}</h2>
                <SwiperButton class="next max-sm:order-1"></SwiperButton>
            </div>
        </div>
    </Swiper>
</template>

<script setup>
import { Navigation, Mousewheel } from "swiper/modules";
defineProps({
    title: String,
    images: [Object, Array]
})
const options = ref({
    mousewheel: { forceToAxis: true },
    navigation: { nextEl: '.next', prevEl: '.prev' },
    modules: [Navigation, Mousewheel],
    injectStyles: [
        `
        .swiper {
            display:flex;
        }
      `,
    ],
})
</script>
