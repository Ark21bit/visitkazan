<template>
    <SwiperOne :title="pageInfo?.lang_info?.title" :images="pageInfo?.media_gallery?.data" class="h-500px lg:h-760px col-span-full -mb-5 lg:-mb-7.5"></SwiperOne>
    <div class="col-span-full pt-7.5 lg:pt-15 rounded-3xl z-1 bg-white">
        <ContainerSidebar class="wrapper">
            <div class="flex flex-col gap-15">
                <div class="flex flex-col gap-7.5">
                    <Breadcrumbs class="mb-5 max-lg:hidden" :links="pageInfo?.info_breadcrumbs?.data"></Breadcrumbs>
                    <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.4 text-fblack max-lg:-mb-2.5">{{ pageInfo?.lang_info?.title }}</h1>
                    <div class="flex lg:flex-wrap gap-2.5 overflow-auto scroll-h-0">
                        <div v-for="info in  pageInfo?.info_params?.data" class="flex gap-2.5 rounded-full text-fblack2 font-medium leading-1.2 text-base items-center px-3 py-2.5 min-w-max shadow-[0_4px_23px_0_#0001] border border-black/5">
                            <img :src="getIconUrl(info?.param_id)" class="w-7 h-7" :alt="item?.param_text">
                            {{ info?.param_text }}
                        </div>
                    </div>
                    <p class="text-fmain text-sm leading-1.4 max-w-4xl">{{ pageInfo.lang_info?.text }}</p>
                    <div class="flex items-center gap-1">
                        <Icon name="Map" class="text-white fill-fblue shrink-0" size="27"></Icon>
                        <span class="text-fblue text-sm leading-1.4 font-medium underline">{{ pageInfo.lang_info?.fiz_address }}</span>
                    </div>
                </div>
                <div class="border-t border-t-fline" v-if="pageInfo?.info_seo_blocks?.data?.length > 0">
                    <SeoBlock v-for="item in pageInfo?.info_seo_blocks?.data" :img="item.media_preview" :title="item?.lang_info?.title" :text="item?.lang_info?.text" />
                </div>
                <Reviews :reviews="pageInfo?.info_reviews?.data" :product-id="pageInfo?.id" :title="pageInfo?.lang_info?.title"></Reviews>
            </div>
        </ContainerSidebar>
    </div>
    <div class="max-lg:hidden mt-15 col-span-full overflow-hidden">
        <SwiperExcursions class="wrapper border-t border-fline2 pt-5"></SwiperExcursions>
    </div>
    <Recommendations v-if="pageInfo.info_recommendations?.data?.length > 0" :data="pageInfo.info_recommendations?.data" class="mt-20 lg:mt-37.5" />
</template>

<script setup>
defineProps({
    pageInfo: Object
})
</script>