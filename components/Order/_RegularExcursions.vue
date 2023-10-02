<template>
    <FormKit type="form" v-model="forms" @submit="setOrder" form-class="flex flex-col gap-y-7.5 relative" :actions="false">
        <h3 class="font-Nekst text-3xl leading-1.1 text-fblack max-lg:mt-10">{{ product?.lang_info?.title }}</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.select_datetime }}</h4>
            <FormKit name="date" type="datepickerC" :allowedDates="availableSelectDate" :minDate="$dayjs().toDate()" :label="generalConfig?.static_info?.global_words?.date"></FormKit>
            <FormKit name="time" type="selectC" :options="timeatableTimes" :label="generalConfig?.static_info?.global_words?.time"></FormKit>
        </div>
        <div class="flex flex-col gap-5" v-if="forms.time">
            <FormKit name="tickets" type="list" :validation="`counterGMax:${maxCountTickets}`">
                <div class="flex gap-1 flex-wrap justify-between font-Nekst text-base leading-1.2 text-fblack">
                    <h4>
                        {{ generalConfig?.static_info?.global_words?.select_category }}
                        {{ generalConfig?.static_info?.global_words?.tickets_left?.replace("%s", remainingTickets) }}
                        <span v-if="remainingTickets < 0" class="text-Inputerror ">{{ generalConfig?.static_info?.global_words?.not_enough_tickets }}</span>
                    </h4>
                    <p>
                        {{ generalConfig?.static_info?.global_words?.select_tickets.replace('%s', selectedNumberTickets) }}
                        <span class="text-fblue ml-3">{{ totalPriceTickets?.toLocaleString() }}₽</span>
                    </p>
                </div>
                <TicketsTable :tickets="product?.info_prices?.data"></TicketsTable>
            </FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.sale_coupon }}</h4>
            <div class="flex flex-col lg:flex-row gap-3 lg:items-end">
                <FormKit type="group" name="coupon">
                    <FormKit type="text" name="text" :label="generalConfig?.static_info?.global_words?.enter_code" outer-class="grow"></FormKit>
                    <FormKit type="meta" name="id" :value="couponData?.data?.id"></FormKit>
                    <FormKit type="meta" name="sale_percent" :value="couponData?.data?.sale_percent"></FormKit>
                </FormKit>
                <Button :loading="couponStatus == 'pending'" :disabled="couponStatus == 'pending' || !Boolean(forms?.coupon?.text)" @click="couponExecute" type="button">{{ generalConfig?.static_info?.global_words?.check }}</Button>
            </div>
            <p class="text-sm text-fblack leading-1.1" v-if="couponData">{{ couponText }}</p>
        </div>
        <div v-if="product?.info_additional_products?.data?.length > 0" class="flex flex-col gap-5">
            <FormKit name="additional" type="list">
                <h4 class="font-Nekst text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.additional_service }}</h4>
                <AdditionalsTable :tickets="product?.info_additional_products?.data"></AdditionalsTable>
            </FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.comment_for_order }}</h4>
            <FormKit name="comment_client" validation="length:0,2000" type="textarea" :label="generalConfig?.static_info?.global_words?.enter_text"></FormKit>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.person_data_contract }}</h4>
            <FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :label="generalConfig?.static_info?.global_words?.fio"></FormKit>
            <FormKit name="place_start_id" validation="required:trim" type="selectC" :options="TitlePlacesStart" :label="generalConfig?.static_info?.global_words?.starting_point"></FormKit>
            <FormKit name="client_telephone" validation="required:trim" type="text" v-maska data-maska="+7(###)###-##-##" :label="generalConfig?.static_info?.global_words?.number_telephone"></FormKit>
            <FormKit name="payment_type_id" validation="required:trim" type="selectC" :options="paymentTypes" :label="generalConfig?.static_info?.global_words?.type_payment"></FormKit>
            <FormKit name="client_email" validation="required:trim|email|length:0,32" type="email" :label="generalConfig?.static_info?.global_words?.email_text"></FormKit>
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

const forms = ref()

const { data: couponData, error: couponError, execute: couponExecute, status: couponStatus } = useBaseFetch('orders/check-coupon', {
    immediate: false,
    onRequest({ options }) {
        options.query = { coupon: forms.value?.coupon?.text }
    },
    key: 'coupon',
    ignoreResponseError: true
})
watchEffect(() => {
    if (couponError.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: couponError.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
})

const couponText = computedEager(() => couponData.value?.status ? `${generalConfig.value?.static_info?.global_words?.sale} ${couponData.value?.message}` : couponData.value?.message)

const dayjs = useDayjs()


const timeatableTimes = computedWithControl(() => forms.value?.date, () =>
    filterMap(props.product?.info_timetables?.data,
        timetable => dayjs(timetable?.start_event_at).tz('Europe/Moscow').isSame(dayjs(forms.value?.date ?? null).tz('Europe/Moscow'), 'day'),
        timetable => { return { value: { id: timetable?.id, label: timetable?.start_event_at_format_time }, label: timetable?.start_event_at_format_time } }
    )
)
watch(timeatableTimes, () => forms.value.time = timeatableTimes.value?.find(() => true)?.value)

const remainingTickets = computed(() => maxCountTickets.value - selectedNumberTickets.value)
const selectedNumberTickets = computed(() => forms.value?.tickets?.reduce((a, b) => a + Number(b?.count), 0))
const totalPriceTickets = computed(() => forms.value?.tickets?.reduce((a, b) => a + Number(b?.count) * Number(b?.price), 0))
const maxCountTickets = computedWithControl(() => forms.value?.time, () =>
    props.product?.info_timetables?.data?.find(a => a.id === forms.value?.time?.id)?.max_count_people
)

let availableSelectDate = computed(() => {
    const uniqueDate = new Set()
    for (const timetable of props?.product?.info_timetables?.data) {
        uniqueDate.add(timetable?.start_event_at)
    }
    return [...uniqueDate]
})

const paymentTypes = computed(() =>
    props.product?.payment_types?.map(paymentType => { return { label: getTitlePaymentTypes(paymentType), value: paymentType } }) ?? []
)

const TitlePlacesStart = computed(() =>
    props.product?.start_place_types?.map(TitlePlaceStart => { return { label: getTitlePlacesStart(TitlePlaceStart), value: TitlePlaceStart } }) ?? []
)
</script>