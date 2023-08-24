<template>
    <Swiper class="w-full h-full -mb-20 flex overflow-hidden relative" :options="options">
        <swiper-slide class="bg-black/35 flex gap-2.5 text-white w-full shrink-0" v-for="n in 5">
            <img class="absolute inset-0 w-full h-full -z-1 object-cover" src="/indexSwiper.png">
            <div class="wrapper mt-25 sm:mt-28 lg:mt-36">
<<<<<<< HEAD
                <h2 class="lt-sm:text-center font-Nekst text-8 sm:text-10.5 lg:text-14.5 leading-1.1 lg:max-w-983px">Сборные экскурсии по Казани и Татарстану</h2>
                <p class="lt-sm:text-center mt-4 lg:mt-2.5 text-sm lg:text-base leading-1.4 lg:leading-1.4 max-w-md">Сборные экскурсии - настоящая палочка-выручалочка для всех путешественников</p>
                <Button class="lt-sm:w-full mt-5 sm:mt-7.5">Расписание</Button>
=======
                <h2 class="max-sm:text-center font-Nekst text-[32px] sm:text-[42px] lg:text-[58px] leading-[1.1] lg:max-w-[983px]">Сборные экскурсии по Казани и Татарстану</h2>
                <p class="max-sm:text-center mt-4 lg:mt-2.5 text-sm lg:text-base leading-[1.4] lg:leading-[1.4] max-w-md">Сборные экскурсии - настоящая палочка-выручалочка для всех путешественников</p>
                <Button class="max-sm:w-full mt-5 sm:mt-7.5">Расписание</Button>
>>>>>>> deef4cf (fix)
            </div>
        </swiper-slide>
        <div slot="container-end" class="absolute bottom-16 lg:bottom-25 z-1 w-full">
            <div class="wrapper flex justify-center lg:justify-start gap-3">
                <SwiperButton class="prev rotate-180"></SwiperButton>
                <SwiperButton class="next"></SwiperButton>
            </div>
        </div>
    </Swiper>
</template>

<script setup>
import { Navigation } from "swiper/modules";
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
