<template>
    <Swiper class="w-full h-full -mb-20 flex overflow-x-hidden relative" :options="options">
        <swiper-slide class="flex gap-2.5 text-white w-full shrink-0" v-for="slide in data">
            <div class="bg-black/35 w-full h-full absolute inset-0 [&>img]:(w-full h-full object-cover object-center -z-1 relative)" v-html="slide?.media_preview"></div>
            <div class="wrapper mt-25 sm:mt-28 lg:mt-36 relative">
                <h2 class="max-sm:text-center font-Nekst text-8 sm:text-10.5 lg:text-14.5 leading-1.1 lg:max-w-983px">{{ slide?.lang_info?.title }}</h2>
                <p class="max-sm:text-center mt-4 lg:mt-2.5 text-sm lg:text-base leading-1.4 lg:leading-1.4 max-w-md">{{ slide?.lang_info?.description }}</p>
                <Button :tag="CustomLink" :to="slide?.target_url" class="max-sm:w-full mt-5 sm:mt-7.5 w-fit">{{ generalConfig?.static_info?.global_words?.schedule }}</Button>
            </div>
        </swiper-slide>
        <div slot="container-end" class="absolute bottom-16 lg:bottom-30 z-1 w-full">
            <div class="wrapper flex justify-center lg:justify-start gap-3">
                <SwiperButton class="prev rotate-180"></SwiperButton>
                <SwiperButton class="next"></SwiperButton>
            </div>
        </div>
    </Swiper>
</template>

<script setup>
import CustomLink from "../atoms/CustomLink.vue";
import { Navigation, Mousewheel } from "swiper/modules";
defineProps({
    data: Array
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const options = ref({
    rewind: true,
    navigation: { nextEl: '.next', prevEl: '.prev' },
    mousewheel: { forceToAxis: true },
    modules: [Navigation, Mousewheel],
    injectStyles: [
        `
        .swiper {
            display:flex;
            overflow-x: hidden
        }
      `,
    ],
})
</script>
