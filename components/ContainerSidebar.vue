<template>
    <div class="grid grid-cols-1 lg:grid-cols-[308px_calc(100%-338px)] gap-7.5">
        <Breadcrumbs v-if="breadcrumbs?.length > 0" :links="breadcrumbs" class="mt-5 col-span-full"></Breadcrumbs>
        <div class="relative">
            <Sidebar class="sticky top-5"></Sidebar>
        </div>
        <slot />
    </div>
</template>
<script setup>
defineProps({
    breadcrumbs: Array
})
</script>
