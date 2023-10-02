<template>
    <div class="h-218px sm:h-296px lg:h-361px">
        <img src="/imgs/about1.png" class="w-full h-full object-cover rounded-3.75" alt="">
    </div>
    <div class="text-fblack flex max-lg:flex-col gap-5 justify-between mt-7.5 lg:mt-12.5 pb-7.5 lg:pb-25 border-b border-fline2">
        <div class="flex-1 max-w-220px min-w-110px">
            <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1">{{ pageInfo?.content?.title }}</h1>
        </div>
        <div class="text-sm leading-1.4 text-fmain lg:max-w-2xl [&>ul]:(flex py-3 flex-col gap-2 list-disc list-inside) [&>h3]:(font-semibold text-fblack text-base leading-1.4) lg:[&>h3]:(text-xl leading-1.4)" v-html="pageInfo?.content?.text_2"></div>
        <div class="flex-1 max-w-220px mt-auto min-w-150px max-lg:hidden">
            <img src="/imgs/about2.png" alt="" class="aspect-110/119 w-full">
        </div>
    </div>
    <OurTeam class="col-[main-start_/_full-end] mt-12.5" :teams="pageInfo?.teams?.data"></OurTeam>
</template>

<script setup>
definePageMeta({
    layout: "fixed"
})

const { data: pageInfo } = await useBaseFetch(`search/page`, {
    key: 'about',
    query: { key: 'about' }
})

</script>