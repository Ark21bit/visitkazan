<template>
    <Swiper class="w-full h-full flex relative" :options="options">
        <swiper-slide v-for="item in childrenExcursions" class="w-fit">
            <CustomLink :to="item.slug" :key="item.id" class="flex w-max text-sm shrink-0 text-fblack transition-colors duration-500 ease-linear hover:text-white px-4 py-2.25 bg-gray hover:bg-fblue rounded-full">
                {{ item?.title }}
            </CustomLink>
        </swiper-slide>
    </Swiper>
</template>

<script setup>
import { Mousewheel } from "swiper/modules";
const options = ref({
    mousewheel: { releaseOnEdges: true },
    slidesPerGroup: 2,
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: { nextEl: '.next', prevEl: '.prev' },
    modules: [Mousewheel],
    injectStyles: [
        `
        .swiper {
            overflow:visible;
            display:flex
        }
      `,
    ],
})

const { childrenExcursions } = storeToRefs(useGeneralConfigStore())
</script>

