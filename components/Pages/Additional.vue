<template>
    <SwiperOne :title="pageInfo?.lang_info?.title" :images="pageInfo?.media_gallery?.data" class="h-500px lg:h-760px col-span-full -mb-5 lg:-mb-7.5"></SwiperOne>
    <div class="col-span-full pt-7.5 lg:pt-15 rounded-3xl z-1 bg-white">
        <ContainerSidebar class="wrapper">
            <div class="flex flex-col gap-15">
                <div class="flex flex-col gap-7.5">
                    <Breadcrumbs class="mb-5 max-lg:hidden" :links="pageInfo?.info_breadcrumbs?.data"></Breadcrumbs>
                    <div class="-mb-2.5 flex max-sm:flex-col gap-5 sm:items-center">
                        <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack">{{ pageInfo?.lang_info?.title }}</h1>
                        <span class="text-fblack text-lg lg:text-2xl font-semibold leading-1.2 lg:leading-1.2 shrink-0">
                            <Icon name="CoinDollar" class="text-fblue text-2xl lg:text-7 mr-2"></Icon>
                            {{ generalConfig?.static_info?.global_words?.ot }} {{ pageInfo?.price_see }}
                        </span>
                    </div>
                    <p class="text-fmain text-sm leading-1.4 max-w-4xl">{{ pageInfo.lang_info?.text }}</p>
                    <Button class="w-full lg:w-fit">{{ generalConfig?.static_info?.global_words?.order }}</Button>
                </div>
                <div class="border-t border-t-fline" v-if="pageInfo?.info_seo_blocks?.data?.length > 0">
                    <SeoBlock v-for="item in pageInfo?.info_seo_blocks?.data" :img="item.media_preview" :title="item?.lang_info?.title" :text="item?.lang_info?.text"/>            
                </div>        
                <Reviews :reviews="pageInfo?.info_reviews?.data" :product-id="pageInfo?.id" :title="pageInfo?.lang_info?.title"></Reviews>
            </div>
        </ContainerSidebar>
    </div>
    <div class="max-lg:hidden mt-15 col-span-full overflow-hidden">
        <SwiperExcursions class="wrapper border-t border-fline2 pt-5"></SwiperExcursions>
    </div>
    <Recommendations v-if="pageInfo?.info_recommendations?.data?.length > 0" :data="pageInfo?.info_recommendations?.data" class="mt-20 lg:mt-37.5" />
</template>

<script setup>
defineProps({
    pageInfo: Object
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>