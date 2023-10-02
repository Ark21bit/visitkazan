<template>
    <div class="group/dropdown border-b transition-border" :class="isDropdownItemShow ? 'border-fline2 last:border-none' : 'border-transparent '">
        <div class="dropdown-header">
            <button type="button" @click.self="toggle" class="hover:text-fblue transition duration-500 ease-linear flex gap-1 items-start text-left justify-between w-full text-fblack" :class="{ 'text-fblue': isDropdownItemShow }">
                <slot name="dropdown-header-content">
                    <span class="text-base font-medium leading-1.2">{{ title }}</span>
                </slot>
                <slot name="dropdown-header-icon" :toggle="toggle" :isDropdownItemShow="isDropdownItemShow">
                    <Icon @click="toggle" name="DropdownSelect" size="19" class="transition-transform duration-500 ease-linear shrink-0" :class="{ 'rotate-180': isDropdownItemShow }"></Icon>
                </slot>
            </button>
        </div>
        <div class="flex flex-col relative overflow-hidden" v-auto-animate>
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

let isDropdownItemShow = ref(props.isShow)

const toggle = () => isDropdownItemShow.value = !isDropdownItemShow.value
</script>


