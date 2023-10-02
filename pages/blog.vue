<template>
    <div class="flex max-sm:flex-col gap-6 justify-between">
        <h1 class="text-6.5 lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack font-Nekst">{{ pageInfo?.content?.title }}</h1>
    </div>
    <ContainerSidebar class="mt-7.5 lg:mt-12.5 max-lg:gap-5 lg:bg-[url(/imgs/catalogBg.svg)] bg-no-repeat bg-[position:bottom_left] pb-36 -mb-36">
        <div class="grid grid-cols-1 sm:grid-cols-2 1200px:grid-cols-3 gap-7.5 h-fit">
            <CardBlog v-for="card in pageInfo?.articles?.data" :img="card?.media_preview" :slug="card?.slug" :title="card?.lang_info?.title" :description="card?.lang_info?.description"></CardBlog>
        </div>
    </ContainerSidebar>
</template>

<script setup>
definePageMeta({
    layout: 'fixed'
})
const { data: pageInfo } = await useBaseFetch(`search/page`, {
    key: 'blogs',
    query: { key: 'blog' }
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? '',
    description: () => pageInfo.value?.seo?.description ?? '',
    keywords: () => pageInfo.value?.seo?.keywords ?? '',
})
</script>