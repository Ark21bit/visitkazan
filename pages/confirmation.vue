<template>
    <ClientOnly>
        <component :is="confirmationComponent">
            <template #head>
                <h1 class="mt-7.5 lg:mt-5 text-2xl lg:text-4xl text-fblack font-Nekst leading-1.1 lg:leading-1.1 lg:text-center">{{ generalConfig?.static_info?.global_words?.confirm_booking }}</h1>
                <p class="mt-5 lg:mt-7.5 text-fblack text-xl lg:text-2xl lg:text-center font-semibold leading-1.2 lg:leading-1.2" v-html="fioText"></p>
                <p class="mt-4 text-fmain text-sm lg:text-center leading-1.4">{{ generalConfig?.static_info?.global_words?.confirm_description_text }}</p>
            </template>
            <template #footer="{ totalPrice }">
                <div class="flex flex-col gap-2.5 lg:gap-5">
                    <h2 class="text-lg font-Nekst text-fblack leading-1.2">{{ generalConfig?.static_info?.global_words?.note }}</h2>
                    <p class="text-sm leading-1.4 text-fblack max-lg:font-medium">{{ orderInfo?.comment_client }}</p>
                </div>
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-2.5 lg:py-5 justify-between lg:border-y border-fline2">
                    <h2 class="text-lg font-Nekst text-fblack leading-1.2">{{ generalConfig?.static_info?.global_words?.total_order_payment }}</h2>
                    <p class="text-base lg:text-lg font-semibold leading-1.2 lg:leading-1.2 text-fblue border-fline2 max-lg:py-4 lg:border-none border-y">{{ totalPrice }} руб.</p>
                </div>
            </template>
            <template #buttons="{ storeOrderInfo }">
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-3">
                    <template v-if="orderCompleted">
                        <p class="text-base lg:text-lg font-bold">{{ 'заказ принят' }}</p>
                    </template>
                    <template v-else>
                        <Button @click="storeOrder(storeOrderInfo)" :disabled="storeStatus === 'pending'" :loading="storeStatus === 'pending'">{{ generalConfig?.static_info?.global_words?.confirmation_order }}</Button>
                        <Button @click="$router.push('/')" :disabled="storeStatus === 'pending'" :loading="storeStatus === 'pending'" decoration="outline" color="white">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
                    </template>
                    <ModalConfirmationSuccess :orderResponse="storeData" :isShow="isModalShow" @close="closeModal" />
                </div>
            </template>
        </component>
    </ClientOnly>
</template>

<script setup>
definePageMeta({
    layout: 'fixed'
})
useSeoMeta({
    title: "Подтверждение заказа",
})

const { orderInfo, orderCompleted } = storeToRefs(useOrderStore())
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const fioText = computed(() =>
    generalConfig.value?.static_info?.global_words?.confirm_who.replace('%s', `<span class='text-fblue'>${orderInfo.value.client_fio}</span>`)
)

onMounted(() => {
    if (isEmptyObject(orderInfo.value)) throw createError({ statusCode: 404, fatal: true })
})

const confirmationComponent = computed(() => {
    if (orderInfo.value?.type_id == 31) return resolveComponent('ConfirmationAdditional')
    if (orderInfo.value?.type_id == 12) return resolveComponent('ConfirmationIndividualExcursions')
    if (orderInfo.value?.type_id == 11) return resolveComponent('ConfirmationRegularExcursions')
    if (orderInfo.value?.type_id > 20 && orderInfo.value?.type_id < 24) {
        if (orderInfo.value?.type_id == 21) {
            return resolveComponent('ConfirmationCombinedTours')
        }
        return resolveComponent('ConfirmationGroupTours')
    }
    return null
})

const executeInfo = ref(null)
const { data: storeData, execute: storeExecute, status: storeStatus, error: storeError } = useBaseFetch('orders/store', {
    immediate: false,
    method: 'POST',
    body: executeInfo,
    watch: false,
})

const storeOrder = async (data) => {
    executeInfo.value = data
    await storeExecute()
    if (storeError.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: storeError.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    orderCompleted.value = true
    openModal()
}

const { closeModal, isModalShow, openModal } = useModal()
</script>