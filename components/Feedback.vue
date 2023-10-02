<template>
    <div class="flex gap-7.5 flex-col px-5 py-7.5 rounded-5 justify-between bg-(no-repeat footer [position:48px_bottom]) sm:px-7.5 lg:(rounded-7.5 p-15 flex-row bg-[url(/imgs/feedbackBg.svg)])">
        <div class="text-white flex-1">
            <h2 class="font-Nekst text-7 sm:text-8 lg:text-10.5 leading-1.1">{{ title }}</h2>
            <p class="mt-7.5 sm:mt-4 leading-1.4 text-sm lg:(text-base max-w-sm leading-1.4)">{{ description }}</p>
        </div>
        <FormKit id="feedback-form" @submit="storeStatements" v-model="forms" type="form" :actions="false" form-class="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1 lg:(max-w-xl gap-6) relative">
            <FormKit name="name_service" validation="required:trim" type="text" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" outer-class="col-span-full" :label="generalConfig?.static_info?.global_words?.product_name">
            </FormKit>
            <FormKit name="fio" validation="required:trim | length:3,64" type="text" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" :label="generalConfig?.static_info?.global_words?.fio"></FormKit>
            <FormKit name="start_address" validation="required:trim" type="text" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" :label="generalConfig?.static_info?.global_words?.starting_point"></FormKit>
            <FormKit name="phone" validation="required:trim" type="text" v-maska data-maska="+7(###)###-##-##" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" :label="generalConfig?.static_info?.global_words?.telephone">
            </FormKit>
            <FormKit name="email" validation="required:trim | email | length:0,32" type="email" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" :label="generalConfig?.static_info?.global_words?.email_text"></FormKit>
            <FormKit name="start_at" validation="required" type="datepickerC" :minDate="$dayjs().toDate()" inputIconClass="$remove:text-#112433 text-Inputlabel" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" :label="generalConfig?.static_info?.global_words?.date">
            </FormKit>
            <FormKit name="count_people" validation="required:trim | min:1 | max:255" type="number" v-maska data-maska="###" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack"
                :label="generalConfig?.static_info?.global_words?.count_people"></FormKit>
            <FormKit name="comment" validation="required:trim | length:5,2000" type="textarea" inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack h-32" outer-class="col-span-full"
                :label="generalConfig?.static_info?.global_words?.wishes"></FormKit>
            <Button type="submit" class="w-full justify-center sm:w-166px mt-1.5 col-span-full" :disabled="status == 'pending'" :loading="status == 'pending'" status>{{ generalConfig?.static_info?.global_words?.send }}</Button>
        </FormKit>
        <Modal @close="closeModal" :is-show="isModalShow" size="sm">
            <ModalContentThanks />
        </Modal>
    </div>
</template>

<script setup>
import { reset } from '@formkit/core'
defineProps({
    title: String,
    description: String,
})
const forms = ref()
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const typeId = computed(() => generalConfig.value?.orders?.type_other_form.find(a => a?.key == "STATEMENT_TYPE_FIND_SERVICE")?.id)

const { error, execute, status } = await useBaseFetch('statements/store', {
    onRequest({ options }) {
        options.body = {
            ...forms.value,
            type_id: typeId.value,
        }
    },
    watch: false,
    method: 'Post',
    immediate: false
})

const storeStatements = async () => {
    await execute()
    if (error.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: error.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    reset('feedback-form')
    openModal()
}
const { closeModal, isModalShow, openModal } = useModal()
</script>
