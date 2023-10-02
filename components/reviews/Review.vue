<template>
    <div class="flex flex-col gap-2.5 p-5 bg-white border border-black/5 shadow-[0_4px_23px_0_#0001] rounded-3.75 h-full">
        <h3 class="font-semibold text-lg text-fblack leading-1.2">{{ name }}</h3>
        <p class="text-fblack text-sm leading-1.2">{{ title }}</p>
        <Rating :rating="rating" class="text-fblue" />
        <p ref="pMessage" class="mt-2.5 text-sm text-fmain leading-1.4 line-clamp-10">{{ message }}</p>
        <p v-if="clampButtonVisble" @click="openFullReview" class="cursor-pointer text-sm text-fblue">{{ generalConfig?.static_info?.global_words?.show_more }}</p>
        <p class="block mt-auto pt-2.5 text-xs text-inactive leading-1.2">{{ $dayjs(date).tz('Europe/Moscow').locale(locale).format('L') }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    rating: Number,
    name: String,
    message: String,
    date: String,
    title: String
})
const { locale } = useI18n()
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const pMessage = ref(null)
const { clampButtonVisble } = useClamp(pMessage, { fontSize: 14, lineHeight: 1.4 })

const emit = defineEmits(['readCompletely'])

const openFullReview = () => {
    useState('selectFullReview').value = props
    emit('readCompletely')
}
</script>