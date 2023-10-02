<template>
    <div class='tab' v-show="activeTab == name" :key="name">
        <slot></slot>
    </div>
</template>
  
<script setup>
const props = defineProps({
    title: { type: String, default: null },
    name: { type: String, default: null },
})

const activeTab = inject('activeTab', '')
</script>


