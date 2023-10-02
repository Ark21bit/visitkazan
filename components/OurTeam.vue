<template>
    <div class="grid grid-cols-[220px_1fr] gap-5">
        <div class=""></div>
        <SwiperAbout :images="images"></SwiperAbout>
    </div>
</template>

<script setup>
const props = defineProps({
    teams: Array
})

const images = computed(() => props.teams?.map(a => a?.media_avatar))
</script>
