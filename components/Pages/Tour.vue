<template>
    <SwiperOne :title="pageInfo?.lang_info?.title" :images="pageInfo?.media_gallery?.data" class="h-500px lg:h-760px col-span-full -mb-5 lg:-mb-7.5"></SwiperOne>
    <div class="col-span-full pt-7.5 lg:pt-15 rounded-3xl z-1 bg-white">
        <ContainerSidebar class="wrapper">
            <div class="flex flex-col gap-15">
                <div class="flex flex-col gap-7.5">
                    <Breadcrumbs class="mb-5 max-lg:hidden" :links="pageInfo?.info_breadcrumbs?.data"></Breadcrumbs>
                    <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack -mb-2.5">{{ pageInfo?.lang_info?.title }}</h1>
                    <Tabs>
                        <template #buttonHeader>
                            <Button class="w-full 1340px:w-fit my-auto ml-auto max-1340px:mt-7.5" @click="openModal">{{ generalConfig?.static_info?.global_words?.order }}</Button>
                        </template>
                        <Tab :name="generalConfig?.static_info?.global_words?.product_program" :title="generalConfig?.static_info?.global_words?.product_program" class="flex flex-col gap-7.5 lg:gap-7 mt-7.5">
                            <div v-for="progam in tourPrograms">
                                <h2 class="text-fblack text-lg leading-1.2 gap-2 flex items-start font-Nekst before:(w-7px h-7px rounded-full bg-fblue mt-.5em shrink-0)">{{ progam.head.text }}</h2>
                                <div class="flex flex-col gap-5 lg:gap-4 mt-5">
                                    <div v-for="item in progam.body" class="flex max-lg:justify-between max-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">{{ item.time }}</p>
                                        <img :src="getIconUrl(item?.icon)" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[2_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">{{ getIconTitle(item?.icon) }}</p>
                                        <p class="w-full lg:flex-[5_1_0] lg:max-w-420px text-fmain leading-1.4">{{ item.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab :name="generalConfig?.static_info?.global_words?.price_tour_list" :title="generalConfig?.static_info?.global_words?.price_tour_list" class="flex flex-col gap-7.5 mt-7.5">
                            <p class="max-w-873px text-fmain text-sm leading-1.4">{{ pageInfo?.lang_info?.text ?? ' ' }}</p>
                            <div class="px-4 py-2.5 mb-2 rounded-1.25 text-left bg-tableTh  text-white sm:hidden">{{ generalConfig?.static_info?.global_words?.price_tour_list }}</div>
                            <Table :class="`lg:grid-cols-${TourPriceTypes.length + 1}`">
                                <template #head>
                                    <TableTr>
                                        <TableTh v-for="priceId in  TourPriceTypes">{{ getTitleInfoPrices(priceId) }}</TableTh>
                                        <TableTh>{{ generalConfig?.static_info?.global_words?.hotel }}</TableTh>
                                    </TableTr>
                                </template>
                                <TableTr v-for="item in tourHotels">
                                    <TableTd v-for="priceId in TourPriceTypes" class="flex-col sm:flex-row" :data-label="getTitleInfoPrices(priceId)">
                                        {{ item.prices.find(a => a?.id == priceId)?.price?.toLocaleString() ?? '-' }} {{ generalConfig?.static_info?.global_words?.people_price_s }}
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" :data-label="generalConfig?.static_info?.global_words?.hotel">
                                        <CustomLink :to="item.hotel.slug" class="underline">{{ item.hotel.title }}</CustomLink>
                                    </TableTd>
                                </TableTr>
                            </Table>
                        </Tab>
                        <Tab v-if="pageInfo?.info_additional_products?.data?.length > 0" :name="generalConfig?.static_info?.global_words?.additional_service" :title="generalConfig?.static_info?.global_words?.additional_service" class="flex flex-col mt-7.5">
                            <div class="py-5 flex flex-col gap-4 first:border-t border-b border-fline2" v-for="additional in pageInfo?.info_additional_products?.data">
                                <h3 class="text-fblack text-base font-medium leading-1.4">{{ additional?.addition_info?.lang_info?.title }}</h3>
                                <p class="text-sm leading-1.4 text-fmain max-w-900px">{{ additional?.addition_info?.lang_info?.text ?? ' ' }}</p>
                                <p class="lg:mt-1 text-lg leading-1.4 text-fblue">{{ additional?.price ?? ' ' }}₽</p>
                            </div>
                        </Tab>
                    </Tabs>
                    <Button class="w-full lg:w-fit" @click="openModal">{{ generalConfig?.static_info?.global_words?.order }}</Button>
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
    <Recommendations v-if="pageInfo?.info_recommendations?.data?.length > 0" :data="pageInfo?.info_recommendations?.data" class="mt-20 lg:mt-37.5" />
    <Modal @close="closeModal" :is-show="isModalShow">
        <OrderCombinedTours v-if="pageInfo.type_id == 21"></OrderCombinedTours>
        <OrderGroupTours v-else :product="pageInfo"></OrderGroupTours>
    </Modal>
</template>

<script setup>
const props = defineProps({
    pageInfo: Object
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { closeModal, isModalShow, openModal } = useModal()

/* код для 1 таба */

const tourPrograms = computed(() => {
    let array = []
    let key = -1
    props.pageInfo.info_programs?.data.forEach(a => {
        if (a?.count_columns == 1) {
            key++
            array?.push({ head: a, body: [] })
            return
        }
        array[key].body?.push(a)
    })

    return array
})

/* список типов размещения */
const TourPriceTypes = computed(() => {
    const set = new Set()
    props.pageInfo?.info_prices?.data?.forEach((element) => {
        set.add(element?.type_price_id)
    })
    return [...set].sort((a, b) => a - b)
})

/* список отелей */
const tourHotelsList = computed(() => {
    const arr = []
    props.pageInfo?.info_prices?.data?.forEach((element) => {
        if (arr.find(a => a?.id == element?.hotel_id) === undefined) arr.push({ id: element?.hotel_id, title: element?.hotel_info?.title, slug: element?.hotel_info?.slug })
    })
    return arr
})

/* сопоставление отелей и типов размещений */
const tourHotels = computed(() => {
    const array = []

    tourHotelsList.value.forEach(hotel => {
        let info = { hotel: hotel, prices: [] }
        props.pageInfo?.info_prices?.data?.forEach(item => {
            if (hotel.id == item.hotel_id) info.prices?.push({ id: item?.type_price_id, price: item?.price })
        })
        array.push(info)
    })
    return array
})
</script>