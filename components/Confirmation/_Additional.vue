<template>
    <slot name="head"></slot>
    <div class="flex mx-auto w-full flex-col gap-7.5 mt-7.5 rounded-3.75 shadow-[0_4px_23px_0_#0001] px-4 py-5 lg:p-7.5 max-w-854px">
        <div class="flex flex-col gap-4 lg:gap-3">
            <ConfirmationBaseBlock>
                <template #title>{{ generalConfig?.static_info?.global_words?.product_name }}</template>
                <template #label>{{ orderInfo?.title }}</template>
            </ConfirmationBaseBlock>
            <ConfirmationBaseBlock class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
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
                <template #title>{{ generalConfig?.static_info?.global_words?.count_people }}</template>
                <template #label>{{ orderInfo?.count_people }}</template>
            </ConfirmationBaseBlock>
        </div>
        <slot name="buttons" :storeOrderInfo="storeOrderInfo"></slot>
    </div>
</template>

<script setup>
const { orderInfo } = storeToRefs(useOrderStore())
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const storeOrderInfo = computed(() => {
    const object = {
        client_email: orderInfo.value?.client_email,
        client_fio: orderInfo.value?.client_fio,
        client_telephone: orderInfo.value?.client_telephone,
        payment_type_id: orderInfo.value?.payment_type_id,
        product_id: orderInfo.value?.product_id,
        begin_at: orderInfo.value?.date,
        count_people: orderInfo.value?.count_people,
    }
    if (orderInfo.value?.comment_client?.trim()) object.comment_client = orderInfo.value?.comment_client
    return object
})
</script>