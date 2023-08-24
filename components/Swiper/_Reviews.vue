<template>
    <Swiper class="w-full h-full flex relative" :options="options">
        <swiper-slide v-for="n in 5" class="w-290px lg:w-307px">
            <Review></Review>
        </swiper-slide>
    </Swiper>
</template>

<script setup>
import { Pagination } from "swiper/modules";
defineProps({
    title: String,
})
const options = ref({
    rewind: true,
    spaceBetween: "20px",
    breakpoints: {
        1024: {
            spaceBetween: "30px"
        }
    },
    slidesPerView: 'auto',
    modules: [Pagination],
    pagination: { clickable: true },
    injectStyles: [
        `
        .swiper {
            display:flex;
            padding:20px;
            margin:-20px;
            flex-direction: column;
        }
        .swiper-pagination {
            display:none;
            gap:10px;
            margin-top:20px;
            flex-wrap:wrap;
            justify-content: center;
        }
        .swiper-pagination-bullet {
            width:10px;
            height:10px;
            border-radius:10px;
            background:#CFCFCF;
            display:block;
            transition: background .5s linear;
            flex-shrink:0;
        } 
        .swiper-pagination-bullet-active  {           
            background:#19B6D6;
        } 
        @media screen and (max-width: 639px) {
            .swiper-pagination {
                display:flex;
            }
        `,
    ],
})
</script>
