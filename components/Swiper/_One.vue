<template>
    <Swiper class="w-full h-full flex overflow-hidden relative" :options="options">
        <swiper-slide class="w-full shrink-0" v-for="n in 5">
<<<<<<< HEAD
            <img class="w-full h-full object-cover object-center" src="/indexSwiper.png">
=======
            <img class="w-full h-full object-cover object-center" src="/indexSwiper.png">          
>>>>>>> deef4cf (fix)
        </swiper-slide>
        <div slot="container-end" class="absolute bottom-12 lg:bottom-15 z-1 w-full">
            <div class="wrapper flex gap-4 justify-center sm:justify-between items-center lt-lg:flex-wrap">
                <SwiperButton class="prev rotate-180 lt-sm:order-1"></SwiperButton>
                <h2 class="font-Nekst text-white text-xl lg:text-4xl leading-1.1 lg:leading-1.2 lt-sm:w-full text-center">{{ title }}</h2>
                <SwiperButton class="next lt-sm:order-1"></SwiperButton>
            </div>
        </div>
    </Swiper>
</template>

<script setup>
import { Navigation } from "swiper/modules";
defineProps({
    title: String,
})
const options = ref({
    rewind: true,
    navigation: { nextEl: '.next', prevEl: '.prev' },
    modules: [Navigation],
    injectStyles: [
        `
        .swiper {
            display:flex;
        }
      `,
    ],
})
</script>
