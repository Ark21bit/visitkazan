<template>
    <div class="flex">
        <Icon v-for="n in rating" name="material-symbols:star-rounded" :size="size"></Icon>
        <Icon v-for="n in count - rating" name="material-symbols:star-rounded" :size="size" class="text-inactive"></Icon>
    </div>
</template>

<script setup>
defineProps({
    rating: { type: Number, default: 3 },
    count: { type: Number, default: 5 },
    size: { type: String, default: "24" }
})
</script>