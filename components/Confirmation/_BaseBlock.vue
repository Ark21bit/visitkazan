<template>
    <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
        <p class="text-fmain">
            <slot name="title" />
        </p>
        <p>
            <slot name="label" />
        </p>
    </div>
</template>

<script setup>

</script>