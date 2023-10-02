<template>
    <swiper-container ref="swiperContainer" :init="false">
        <slot></slot>
    </swiper-container>
</template>

<script setup>
const props = defineProps({
    options: Object
})

const swiperContainer = ref()

useSwiper(swiperContainer, () => props.options)
</script>