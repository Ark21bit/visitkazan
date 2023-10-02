<template>
    <Modal :is-show="isModalShow" @close="closeModal" :size="status === 'success' ? 'sm' : 'lg'">
        <template v-if="status === 'success'">
            <ModalContentThanks></ModalContentThanks>
        </template>
        <template v-else>
            <h2 class="font-Nekst text-3xl leading-1.1">{{ generalConfig?.static_info?.global_words?.request_call }}</h2>
            <FormKit v-model="forms" @submit="statementsStore" type="form" :actions="false" form-class="flex flex-col mt-4 gap-5 lg:gap-6 relative">
                <FormKit name="type_id" type="meta" :value="generalConfig?.orders?.type_other_form?.find(a => a?.key == 'STATEMENT_TYPE_REQUEST_CALL')?.id"></FormKit>
                <FormKit name="fio" validation="required:trim|length:3,64" type="text" :label="generalConfig?.static_info?.global_words?.fio"></FormKit>
                <FormKit name="phone" validation="required:trim" type="text" v-maska data-maska="+7(###)###-##-##" :label="generalConfig?.static_info?.global_words?.telephone"></FormKit>
                <Button :disabled="status === 'pending'" :loading="status === 'pending'" type="submit" class="w-full justify-center col-span-full">{{ generalConfig?.static_info?.global_words?.request_call }}</Button>
            </FormKit>
        </template>
    </Modal>
    <slot :openModal="openModal"></slot>
</template>

<script setup>
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { closeModal, isModalShow, openModal: openModalInit } = useModal()
const openModal = () => {
    if (status.value == 'success') clearNuxtData('statements/store')
    openModalInit()
}

const forms = ref()
const { error, execute, status } = await useBaseFetch('statements/store', {
    method: 'POST',
    immediate: false,
    body: forms,
    watch: false,
    key: 'statements/store'
})

const statementsStore = async () => {
    await execute()
    if (error.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: error.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    forms.value = {}
}
</script>