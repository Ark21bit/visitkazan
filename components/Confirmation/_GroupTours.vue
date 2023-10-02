<template>
    <slot name="head"></slot>
    <div class="flex mx-auto w-full flex-col gap-7.5 mt-7.5 rounded-3.75 shadow-[0_4px_23px_0_#0001] px-4 py-5 lg:p-7.5 max-w-854px">
        <div class="flex flex-col gap-4 lg:gap-3">
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.product_name }}</template>
                <template #label>{{ orderInfo?.title }}</template>
            </ConfirmationBaseBlock>
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.product_date }}</template>
                <template #label>{{ orderInfo?.date }}</template>
            </ConfirmationBaseBlock>
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.tourist_telephone }}</template>
                <template #label>{{ orderInfo?.client_telephone }}</template>
            </ConfirmationBaseBlock>
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.email }}</template>
                <template #label>{{ orderInfo?.client_email }}</template>
            </ConfirmationBaseBlock>
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.type_payment }}</template>
                <template #label>{{ getTitlePaymentTypes(orderInfo?.payment_type_id) }}</template>
            </ConfirmationBaseBlock>
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.type_allocation }}</template>
                <template #label>{{ getTitleInfoPrices(orderInfo?.type_price_id) }}</template>
            </ConfirmationBaseBlock>
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.hotel }}</template>
                <template #label>{{ orderInfo?.hotel?.label }}</template>
            </ConfirmationBaseBlock>
        </div>
        <div class="flex flex-col gap-5" v-if="filterAdditionals">
            <h2 class="text-lg font-Nekst text-fblack leading-1.2">{{ generalConfig?.static_info?.global_words?.services }}</h2>
            <div class="border-t pt-4 lg:pt-0 border-fline2 lg:border-none flex flex-col gap-3">
                <ConfirmationBaseBlock v-for="item in filterAdditionals">
                    <template #title>{{ item?.title }} ({{ item?.count }})</template>
                    <template #label>{{ item?.price * item?.count }} руб.</template>
                </ConfirmationBaseBlock>
            </div>
        </div>
        <tempalte v-if="totalPrice > 0">
            <slot name="footer" :totalPrice="totalPrice"></slot>
        </tempalte>
        <slot name="buttons" :storeOrderInfo="storeOrderInfo"></slot>
    </div>
</template>

<script setup>
const { orderInfo } = storeToRefs(useOrderStore())
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const filterAdditionals = computed(() => orderInfo.value?.additional?.filter(a => a.count > 0))

const totalPrice = computed(() => filterAdditionals.value?.reduce((a, b) => a + b.count * b.price, 0) ?? 0)

const storeOrderInfo = computed(() => {
    const object = {
        client_email: orderInfo.value?.client_email,
        client_fio: orderInfo.value?.client_fio,
        client_telephone: orderInfo.value?.client_telephone,
        payment_type_id: orderInfo.value?.payment_type_id,
        product_id: orderInfo.value?.product_id,
        begin_at: orderInfo.value?.date,
        type_price_id: orderInfo.value?.type_price_id,
        hotel_id: orderInfo.value?.hotel?.value
    }
    if (orderInfo.value?.comment_client?.trim()) object.comment_client = orderInfo.value?.comment_client
    if (orderInfo.value?.additional?.length > 0) object.additional = orderInfo.value.additional.map(a => { return { id: a.id, count: a.count } })
    return object
})
</script>