<template>
    <div class="relative flex gap-0.5 text-sm text-fblack hover:text-tag items-end transition-colors duration-500 ease-linear" @mouseenter="isShow = true" @mouseleave="isShow = false">
        <slot name="title">
            {{ title }}
        </slot>
        <Icon name="DropdownSelect" size="15" :class="{ 'rotate-180': isShow }" class="transition-transform duration-500 ease-linear p-0.5 box-content shrink-0"></Icon>
        <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-500 easy-linear" leave-active-class="transition-opacity duration-500 easy-linear">
            <div v-show="isShow" class="absolute top-full pt-2.5 w-max max-w-50">
                <div class="rounded-lg shadow-[0_4px_23px_0_#0001] overflow-hidden">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
defineProps({
    title: String
})

const isShow = ref(false)
</script>
