<template>
    <Swiper class="w-full h-full flex" :options="options">
        <swiper-slide class="group/services w-220px sm:w-250px lg:w-307px h-fit" v-for="service in services">
            <CustomLink :to="service?.slug">
                <div class="overflow-hidden rounded-3.75">
                    <img :src="service?.image" alt="" class="group-hover/services:scale-110 duration-500 transition-transform object-cover object-center h-293px sm:h-333px lg:group-odd/services:h-409px lg:h-268px w-full">
                </div>
                <p class="mt-4 text-xl leading-1.2 font-semibold text-fblack">{{ service?.title }}</p>
                <p class="mt-2.5 text-fmain text-sm">{{ service?.description }}</p>
            </CustomLink>
        </swiper-slide>
    </Swiper>
</template>

<script setup>
import { Mousewheel } from "swiper/modules";
defineProps({
    services: Array
})
const options = ref({
    rewind: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    mousewheel: { forceToAxis: true },
    breakpoints: {
        1024: {
            spaceBetween: 30
        }
    },
    modules: [Mousewheel],
    injectStyles: [
        `
        .swiper {
            display:flex;
            overflow:visible;
        }
      `,
    ],
})
</script>
