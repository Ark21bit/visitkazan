<template>
    <Swiper class="w-full h-full flex" :options="options">
        <swiper-slide class="group/services w-220px sm:w-250px lg:w-307px" v-for="n in 4">
            <img src="/img.png" alt="" class="rounded-3.75 object-cover object-center h-293px sm:h-333px lg:group-odd/services:h-409px lg:h-268px w-full">
            <p class="mt-4 text-xl leading-1.2 font-semibold text-fblack">Туры</p>
            <p class="mt-2.5 text-fmain text-sm">Откройте для себя мир контрастов Казани</p>
        </swiper-slide>
    </Swiper>
</template>

<script setup>
const options = ref({
    rewind: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    breakpoints: {
        1024: {
            spaceBetween: 30
        }
    },
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
