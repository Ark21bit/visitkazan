<template>
    <div class="text-fblack text-sm leading-1.2">
        <CustomLink v-for="link in links" :to="link?.slug" class="after:(mx-1 content-['/']) last:(text-inactive pointer-events-none after:content-none)">{{ link?.lang_info.title }}</CustomLink>
    </div>
</template>

<script setup>
defineProps({
    links: Array
})
</script>