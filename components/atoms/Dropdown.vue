<template>
    <div class="group/dropdown" :class="{ 'border-b border-fline2 last:border-none': isDropdownItemShow }">
        <div class="dropdown-header  ">
            <button type="button" @click="isDropdownItemShow = !isDropdownItemShow" class="hover:text-fblue transition duration-500 ease-linear flex gap-1 items-start text-left justify-between w-full text-fblack" :class="{ 'text-fblue': isDropdownItemShow }">
<<<<<<< HEAD
                <slot name="dropdown-header-content">
                    <span class="text-base font-medium leading-1.2">{{ title }}</span>
=======

                <slot name="dropdown-header-content">
                    <span class="text-base font-medium leading-[normal]">{{ title }}</span>
>>>>>>> deef4cf (fix)
                </slot>
                <slot name="dropdown-header-icon" :isDropdownItemShow="isDropdownItemShow">
                    <Icon name="DropdownSelect" size="19" class="transition-transform duration-500 ease-linear shrink-0" :class="{ 'rotate-180': isDropdownItemShow }"></Icon>
                </slot>
            </button>
        </div>
        <div class="flex flex-col">
            <template v-if="isDropdownItemShow">
                <slot />
            </template>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isShow: { type: Boolean, default: false },
    title: String
})

let isDropdownItemShow = ref(false)
watch(() => props.isShow, () => {
    isDropdownItemShow.value = props.isShow
})
</script>


