<template>
    <td :data-label="label" class="flex font-medium leading-1.2 text-sm gap-2 gap-y-3 lt-lg:justify-between lg:py-4 lg:px-5 h-full lg:border-b lg:border-fline3 lg:group-last/table:border-none lg:before:hidden before:text-fmain before:content-[attr(data-label)]">
        <slot></slot>
    </td>
</template>

<script setup>
defineProps({
    label: String
})
</script>