<template>
    <div class="flex flex-col md:flex-row gap-5 border-b border-b-fline py-7.5">
        <div class="flex-1 gap-2 flex flex-col justify-between">
            <div class="font-Nekst text-fblack text-xl leading-1.2 [&>span]:text-fblue" v-html="title"></div>
            <div v-if="img" v-html="img" class="h-48 w-full max-w-91 my-auto [&>img]:(h-full w-full object-cover rounded-1.25)"></div>
        </div>
        <div class="flex-1">
            <p class="text-sm text-fmain leading-1.4 text-justify">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    text: String,
    img: String,
})
</script>
