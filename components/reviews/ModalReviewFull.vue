<template>
    <Modal class="flex flex-col gap-2.5 p-5 bg-white border border-black/5 shadow-[0_4px_23px_0_#0001] rounded-3.75">
        <h3 class="font-semibold text-lg text-fblack leading-1.2">{{ review?.name }}</h3>
        <p class="text-fblack text-sm leading-1.2">{{ review?.title }}</p>
        <Rating :rating="review?.rating" class="text-fblue" />
        <p class="mt-2.5 text-sm text-fmain leading-1.4">{{ review?.message }}</p>
        <p class="mt-2.5 text-xs text-inactive leading-1.2">{{ $dayjs().tz('Europe/Moscow').locale(locale).format('L') }}</p>
    </Modal>
</template>
<script setup>
const review = useState('selectFullReview')
const { locale } = useI18n()
</script>