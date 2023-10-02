<template>
    <Swiper id="swiper" class="w-full h-full -mb-20 flex overflow-x-hidden relative" :options="options">
        <swiper-slide v-for="slide in images">
            <div class="w-full aspect-121/125 [&>img]:(rounded-3.75 w-full h-full object-cover object-center)"><img src="/imgs/about1.png" alt=""></div>
        </swiper-slide>
    </Swiper>
    {{ progress }}
</template>

<script setup>
const swiperEl = ref(null)

const progress = ref(null)
/* 
onMounted(() => {
    swiperEl.value = document.querySelector('#swiper');
    swiperEl.value.addEventListener('progress', (event) => {
        progress.value = event.detail[1];
    });
    document.querySelector('#swiper-slide').style.width = `width:242px`
})

watch(progress, () => {
    document.querySelector('#swiper-slide-active').style.width = `width:${242 + 242 * (1 - progress)}px`
}) */

defineProps({
    images: Array
})
const options = ref({
    slidesPerView: 'auto',
    spaceBetween: 30,
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
