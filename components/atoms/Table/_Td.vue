<template>
    <td :data-label="label" class="flex font-medium leading-1.2 text-sm gap-2 gap-y-3 max-lg:justify-between h-full lg:(py-4 px-5 border-b border-fline3 group-last/table:border-none before:hidden) before:(text-fmain content-[attr(data-label)])">
        <slot></slot>
    </td>
</template>

<script setup>
defineProps({
    label: String
})
</script>