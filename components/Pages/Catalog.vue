<template>
    <div class="flex max-sm:flex-col gap-6 justify-between">
        <h1 class="text-6.5 lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack font-Nekst">{{ pageInfo?.lang_info?.title }}</h1>
        <FormKit v-if="dateVisible || isSearched" :value="isSearched ? $dayjs($route.fullPath.slice(-10)).format('YYYY-MM-DD') : null" @input="changeTimetamble" type="datepickerC" :minDate="$dayjs().toDate()" :label="generalConfig?.static_info?.global_words?.select_date" wrapper-class="flex gap-5 items-center"
            label-class="$remove:text-xs $remove:text-Inputlabel text-sm text-fblack" inner-class="w-162px focus-within:ring-fblack $remove:focus-within:ring-fline $remove:bg-Inputwhite bg-transparent $remove:ring-black/5 ring-fline"></FormKit>
    </div>
    <ContainerSidebar :breadcrumbs="pageInfo?.info_breadcrumbs?.data" class="mt-7.5 lg:mt-12.5 max-lg:gap-5 lg:bg-[url(/imgs/catalogBg.svg)] bg-no-repeat bg-[position:bottom_left]">
        <div class="grid grid-cols-1 sm:grid-cols-2 1200px:grid-cols-3 gap-7.5 h-fit">
            <CardCatalog v-for="card in isSearched ? pageInfo : pageInfo?.info_products?.data" @order="openOrder(card?.slug)" :type_id="card?.type_id" :img="card?.media_preview" :slug="card?.slug" :title="card?.lang_info?.title" :duration="card?.duration_event" :price="card?.price_see"
                :description="card?.lang_info?.description" :reviews-count="card.reviews_count" :is-sale="card?.is_sale"></CardCatalog>
        </div>
    </ContainerSidebar>
    <div class="border-t border-t-fline mt-7.5 lg:mt-12.5 " v-if="pageInfo?.info_seo_blocks?.data?.length > 0">
        <SeoBlock v-for="item in pageInfo?.info_seo_blocks?.data" :img="item.media_preview" :title="item?.lang_info?.title" :text="item?.lang_info?.text" />
    </div>
    <Modal @close="closeModal" :is-show="isModalShow" :class="{ 'min-h-225': pending }">
        <div v-if="pending" class="m-auto flex justify-center items-center">
            <Icon name="svg-spinners:blocks-wave" class="text-7xl text-fblue"></Icon>
        </div>
        <component v-else :is="order" :product="product"></component>
    </Modal>
</template>

<script setup>
const props = defineProps({
    pageInfo: Object,
    isSearched: Boolean,
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const localePath = useLocalePath()
const route = useRoute()

const selectOrder = ref(null)
const { data: product, pending, execute } = useBaseFetch(() => 'search/slugs', {
    immediate: false,
    query: { slug: selectOrder },
    transform: (product) => product.data,
    watch: false
})

const order = computedWithControl(() => product.value?.type_id, () => {
    if (product.value?.type_id == 31) return resolveComponent('OrderAdditional')
    if (product.value?.type_id == 12) return resolveComponent('OrderIndividualExcursions')
    if (product.value?.type_id == 11) return resolveComponent('OrderRegularExcursions')
    if (product.value?.type_id > 20 && product.value?.type_id < 24) {
        if (product.value?.type_id == 21) {
            return resolveComponent('OrderCombinedTours')
        }
        return resolveComponent('OrderGroupTours')
    }
    return null
})


const dayjs = useDayjs()
const dateVisible = computed(() => route.path == localePath('/ekskursii/regulyarnyye'))
const changeTimetamble = async (date) => await navigateTo(localePath(`/excursion/timetable/${dayjs(date).format('YYYY/MM/DD')}`))

const { closeModal, isModalShow, openModal } = useModal()
const openOrder = async (value) => {
    openModal()
    selectOrder.value = value
    execute()
}
</script>