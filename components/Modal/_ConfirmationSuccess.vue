<template>
    <Modal size="lg">
        <h3 class="font-Nekst text-xl font-semibold leading-1.1 text-fblack mt-5 text-center first-letter:uppercase">{{ generalConfig?.static_info?.global_words?.thank_you }}</h3>
        <template v-if="orderResponse?.data?.url_telegram_subscribe">
            <p class="mt-4 text-center">{{ generalConfig?.static_info?.global_words?.subscribe_telegram_text }}</p>
            <Button :tag="CustomLink" :to="orderResponse?.data?.url_telegram_subscribe" class="mt-1 mx-auto w-full gap-2">
                {{ generalConfig?.static_info?.global_words?.subscribe }}
                <Icon name="icon-park-outline:telegram" class="text-lg" />
            </Button>
        </template>
        <template v-if="true">
            <p class="mt-5 text-center" v-if="orderResponse?.data?.status_pay == true && orderInfo?.payment_type_id === 1">{{ generalConfig?.static_info?.global_words?.success_send_request }}</p>
            <p class="mt-5 text-center" v-else>{{ generalConfig?.static_info?.global_words?.success_send_request_no_status_pay }}</p>
        </template>
        <template v-if="true">
            <Button v-if="orderResponse?.data?.status_pay" :to="orderResponse?.data?.url_pay" :tag="CustomLink" class="mt-1 mx-auto w-41">{{ generalConfig?.static_info?.global_words?.pay }}</Button>
            <Button v-else="orderResponse?.data?.status_pay" to="/" :tag="CustomLink" class="mt-1 mx-auto w-full">{{ generalConfig?.static_info?.global_words?.on_main_page }}</Button>
        </template>
    </Modal>
</template>

<script setup>
import CustomLink from '../atoms/CustomLink.vue';
defineProps({
    orderResponse: Object
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { orderInfo } = storeToRefs(useOrderStore())
</script>