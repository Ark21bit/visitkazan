<template>
    <Modal v-bind="$attrs" :is-show="isModalShow" @close="closeModal" :size="status === 'success' ? 'sm' : '2xl'">
        <template v-if="status === 'success'">
            <ModalContentThanks></ModalContentThanks>
        </template>
        <template v-else>
            <h2 class="font-Nekst text-3xl leading-1.1">{{ generalConfig?.static_info?.global_words?.send_review }}</h2>
            <FormKit v-model="forms" @submit="reviewStore" type="form" :actions="false" form-class="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full relative mt-5">
                <FormKit name="rating" type="ratingC" validation="required" outer-class="col-span-full" :label="generalConfig?.static_info?.global_words?.you_mark"></FormKit>
                <FormKit name="name" type="text" validation="required:trim|length:3" :label="generalConfig?.static_info?.global_words?.fio"></FormKit>
                <FormKit name="email" type="text" validation="required:trim|email|length:0,32" :label="generalConfig?.static_info?.global_words?.email_text"></FormKit>
                <FormKit name="title" type="text" :value="productTitle" outer-class="col-span-full" disabled :label="generalConfig?.static_info?.global_words?.excursion"></FormKit>
                <FormKit name="message" type="textarea" validation="required:trim|length:4,2000" outer-class="col-span-full" :label="generalConfig?.static_info?.global_words?.review"></FormKit>
                <Button :disabled="status === 'pending'" :loading="status === 'pending'" type="submit" class="w-full justify-center col-span-full">{{ generalConfig?.static_info?.global_words?.send }}</Button>
            </FormKit>
        </template>
    </Modal>
    <slot :openModal="openModal"></slot>
</template>

<script setup>
defineOptions({
    inheritAttrs: false,
})
const props = defineProps({
    productId: Number,
    productTitle: String,
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { closeModal, isModalShow, openModal: openModalInit } = useModal()
const openModal = () => {
    if (status.value == 'success') clearNuxtData('reviews/store')
    openModalInit()
}

const forms = ref()
const { error, execute, status } = await useBaseFetch('reviews/store', {
    method: 'POST',
    immediate: false,
    onRequest({ options }) {
        options.body = {
            product_id: props.productId,
            rating: forms.value?.rating,
            name: forms.value?.name,
            email: forms.value?.email,
            message: forms.value?.message,
        }
    },
    key: 'reviews/store'
})

const reviewStore = async () => {
    await execute()
    if (error.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: error.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    forms.value = {}
}
</script>