<template>
    <SwiperOne :title="pageInfo?.lang_info?.title" :images="pageInfo?.media_gallery?.data" class="h-500px lg:h-760px col-span-full -mb-5 lg:-mb-7.5"></SwiperOne>
    <div class="col-span-full pt-7.5 lg:pt-15 rounded-3xl z-1 bg-white">
        <ContainerSidebar class="wrapper">
            <div class="flex flex-col gap-15">
                <div class="flex flex-col gap-7.5">
                    <Breadcrumbs class="mb-5 max-lg:hidden" :links="pageInfo?.info_breadcrumbs?.data"></Breadcrumbs>
                    <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack -mb-2.5">{{ pageInfo?.lang_info?.title }}</h1>
                    <p class="text-fmain text-sm leading-1.4 max-w-4xl">{{ pageInfo.lang_info?.text }}</p>
                    <Button class="w-full lg:w-fit" @click="openModal">{{ generalConfig?.static_info?.global_words?.order }}</Button>
                </div>
                <div>
                    <h2 class="font-Nekst text-xl lg:text-2xl lg:leading-1.1 leading-1.1 text-fblack">{{ generalConfig?.static_info?.global_words?.general_description }}</h2>
                    <div class="border-t border-fline2 mt-8 sm:mt-6 lg:mt-7.5">
                        <div class="border-b border-fline2 py-4 flex max-sm:flex-col sm:items-center justify-between gap-2.5">
                            <div class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4">
                                <Icon name="Calendar" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>
                                <span>{{ generalConfig?.static_info?.global_words?.nearest_date }}</span>
                            </div>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4 font-medium">{{ nearestDate }}</p>
                        </div>
                        <div class="border-b border-fline2 py-4 flex max-sm:flex-col sm:items-center justify-between gap-2.5">
                            <div class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4">
                                <Icon name="CoinDollar" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>
                                <span>{{ generalConfig?.static_info?.global_words?.price_list }}</span>
                            </div>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4 font-medium">{{ pageInfo?.price_see ?? ' ' }}₽</p>
                        </div>
                        <div class="border-b border-fline2 py-4 flex max-sm:flex-col sm:items-center justify-between gap-2.5">
                            <div class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4">
                                <Icon name="TimeOclock" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue fill-fblue/30"></Icon>
                                <span>{{ generalConfig?.static_info?.global_words?.duration }}</span>
                            </div>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4 font-medium">{{ pageInfo?.duration_event_text }}</p>
                        </div>
                        <div class="border-b border-fline2 py-4 flex max-sm:flex-col sm:items-center justify-between gap-2.5">
                            <div class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4">
                                <Icon name="Location" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>
                                <span>{{ generalConfig?.static_info?.global_words?.departure }}</span>
                            </div>
                            <div class="flex max-sm:flex-col gap-3 sm:gap-5 lg:gap-7.5">
                                <p v-for="item in pageInfo?.start_place_types ?? []" class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4 font-medium">{{ getTitlePlacesStart(item) }};</p>
                            </div>
                        </div>
                        <div class="border-b border-fline2 py-4 flex max-sm:flex-col sm:items-center justify-between gap-2.5">
                            <p class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4">
                                <Icon name="Signpost" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>
                                <span>{{ generalConfig?.static_info?.global_words?.type_excursion }}</span>
                            </p>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 lg:leading-1.4 font-medium">{{ getTitleCategoriesProduct(pageInfo?.category_id) }}</p>
                        </div>
                    </div>
                </div>
                <div class="contents lg:flex gap-7 justify-between">
                    <div class="flex flex-col gap-7.5 flex-1 grow">
                        <h2 class="font-Nekst text-xl lg:text-2xl lg:leading-1.1 leading-1.1 text-fblack">{{ generalConfig?.static_info?.global_words?.included_in_the_price }}</h2>
                        <ul class="flex flex-col gap-5 leading-1.2 font-medium text-black2 text-base">
                            <li v-for="item in pageInfo?.lang_info?.half_text ?? []" class="flex items-start gap-2 before:(content-empty bg-fblue -translate-y-1/3 mt-.5em shrink-0 w-2 h-2 rounded-full)">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-7.5 flex-1 lg:max-w-306px">
                        <h2 class="font-Nekst text-xl lg:text-2xl leading-1.1 lg:leading-1.1 text-fblack">{{ generalConfig?.static_info?.global_words?.all_price }}</h2>
                        <p class="lg:-mt-2.5 text-fmain text-sm leading-1.4">{{ generalConfig?.static_info?.global_words?.free_child_seven_years }}</p>
                        <div class="flex flex-col border-t border-fline2">
                            <div v-for="ticket in pageInfo?.info_prices?.data" class="flex justify-between gap-2 border-b border-fline2 py-4 text-fblack text-base leading-1.4">
                                <p>{{ getTitleTypeTicket(ticket?.type_ticket_id) }}</p>
                                <p class="font-medium">{{ ticket?.price }}₽</p>
                            </div>
                        </div>
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
    <Modal @close="closeModal" :is-show="isModalShow">
        <OrderRegularExcursions :product="pageInfo"></OrderRegularExcursions>
    </Modal>
</template>

<script setup>
const props = defineProps({
    pageInfo: Object
})
const { locale } = useI18n()
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { closeModal, isModalShow, openModal } = useModal()
const dayjs = useDayjs()
const nearestDate = computed(() => {
    if (props.pageInfo?.info_timetables?.data?.length > 0) return dayjs(props.pageInfo?.info_timetables?.data?.[0]?.start_event_at ?? null).tz('Europe/Moscow').locale(locale.value).format('D MMMM')
    return '-'
})
</script>