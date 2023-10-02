<template>
    <FormKit type="form" @submit="setOrder" form-class="flex flex-col gap-y-7.5 relative" :actions="false">
        <h3 class="font-Nekst text-3xl leading-1.1 text-fblack max-lg:mt-10">{{ product?.lang_info?.title }}</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.select_datetime }}</h4>
            <FormKit name="date" validation="required" type="datepickerC" :minDate="$dayjs().toDate()" :label="generalConfig?.static_info?.global_words?.date"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.type_allocation }}</h4>
            <FormKit @input="setHotel" name="type_price_id" validation="required" type="selectC" :options="typePrices" :label="generalConfig?.static_info?.global_words?.type_allocation"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.select_hotel }}</h4>
            <FormKit name="hotel" type="selectC" validation="required" :options="hotels" :label="generalConfig?.static_info?.global_words?.select_hotel_q"></FormKit>
        </div>
        <div v-if="product?.info_additional_products?.data?.length > 0" class="flex flex-col gap-5">
            <FormKit name="additional" type="list">
                <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.additional_service }}</h4>
                <AdditionalsTable :tickets="product?.info_additional_products?.data"></AdditionalsTable>
            </FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.comment_for_order }}</h4>
            <FormKit name="comment_client" validation="length:0,2000" type="textarea" :label="generalConfig?.static_info?.global_words?.enter_text"></FormKit>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.person_data_contract }}</h4>
            <FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :label="generalConfig?.static_info?.global_words?.fio"></FormKit>
            <FormKit name="client_email" validation="required:trim|email|length:0,32" type="email" :label="generalConfig?.static_info?.global_words?.email_text"></FormKit>
            <FormKit name="count_people" validation="required:trim|between:1,100" type="number" v-maska data-maska="###" number :label="generalConfig?.static_info?.global_words?.count_people"></FormKit>
            <FormKit name="client_telephone" validation="required:trim" type="text" v-maska data-maska="+7(###)###-##-##" :label="generalConfig?.static_info?.global_words?.number_telephone"></FormKit>
            <FormKit name="payment_type_id" validation="required:trim" type="selectC" :options="paymentTypes" :label="generalConfig?.static_info?.global_words?.type_payment"></FormKit>
        </div>
        <div class="flex flex-col gap-4 lg:gap-5">
            <FormKit name="confirm1" validation="accepted" decorator-icon="select" type="checkbox" :label="generalConfig?.static_info?.global_words?.order_confirm_procedure_provision_excursion_services"></FormKit>
            <FormKit name="confirm2" validation="accepted" decorator-icon="select" type="checkbox" :label="generalConfig?.static_info?.global_words?.order_fz_confirm_text"></FormKit>
        </div>
        <FormKit type="meta" name="title" :value="product?.lang_info?.title"></FormKit>
        <FormKit type="meta" name="type_id" :value="product?.type_id"></FormKit>
        <FormKit type="meta" name="product_id" :value="product?.id"></FormKit>
        <FormKit type="submit" input-class="w-full justify-center" outer-class="lg:mt-5">{{ generalConfig?.static_info?.global_words?.reservation }}</FormKit>
    </FormKit>
</template>

<script setup>
const props = defineProps({
    product: Object
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { setOrder } = useOrderStore()

const hotels = ref(null)
const setHotel = (id) => {
    let Array = []
    props.product?.info_prices?.data?.forEach(a => {
        if (a?.type_price_id == id) Array.push({ value: { value: a?.hotel_id, label: a?.hotel_info?.title }, label: a?.hotel_info?.title })
    })
    hotels.value = Array
}

const paymentTypes = computed(() =>
    props.product?.payment_types?.map(paymentType => { return { label: getTitlePaymentTypes(paymentType), value: paymentType } }) ?? []
)

const typePrices = computed(() => {
    const set = new Set()
    props.product?.info_prices?.data?.forEach(infoPrice => {
        set.add(infoPrice.type_price_id)
    })
    return Array.from(set).map(infoPrice => {
        return { label: getTitleInfoPrices(infoPrice), value: infoPrice }
    })
})
</script>