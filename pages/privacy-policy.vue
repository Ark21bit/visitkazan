<template>
    <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack">{{ data?.content?.title }}</h1>
    <div class="text-base lg:text-xl font-medium leading-1.4 lg:leading-1.4 text-fblack mt-7.5" v-html="data?.content?.text"></div>
</template>

<script setup>
definePageMeta({
    layout: 'fixed'
})

const { data } = await useBaseFetch('search/page', {
    query: { key: 'privacy-policy' }
})

useSeoMeta({
    title: () => data.value?.seo?.title ?? " ",
    description: () => data.value?.seo?.description ?? " ",
    keywords: () => data.value?.seo?.keywords ?? ' ',
})
</script>
