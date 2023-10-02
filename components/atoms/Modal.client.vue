<template>
    <Teleport to="#teleported">
        <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-500 easy-linear" leave-active-class="transition-opacity duration-500 easy-linear">
            <template v-if="directive == 'if'">
                <div v-if="isShow" :class="modalOverlayClass">
                    <div :class="modalWrapperClass" @click.self="closeModal">
                        <!-- Modal content -->
                        <div v-bind="$attrs" :class="modalClass">
                            <button @click="closeModal" type="button" :class="modalCloseClass">
                                <slot name="close-icon">
                                    <Icon name="ic:round-close" size="20"></Icon>
                                </slot>
                            </button>
                            <slot />
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div v-show="isShow" :class="modalOverlayClass">
                    <div :class="modalWrapperClass" @click.self="closeModal" >
                       <!-- Modal content -->
                        <div v-bind="$attrs" :class="modalClass">
                            <button @click="closeModal" type="button" :class="modalCloseClass">
                                <slot name="close-icon">
                                    <Icon name="ic:round-close" size="20"></Icon>
                                </slot>
                            </button>
                            <slot />
                        </div>
                    </div>
                </div>
            </template>
        </Transition>
    </Teleport>
</template>

<script setup>
defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['close'])

const props = defineProps({
    overlayClass: String,
    wrapperClass: String,
    noDefaultAttrsClass: { type: Boolean, default: false },
    isShow: { type: Boolean, default: false },
    size: { type: [String, Boolean], default: '4xl' },
    closeClass: { type: String },
    directive: { type: String, default: 'if' }
})

const modalOverlayClass = computed(() => {
    return [
        checkDefaultClass(props.overlayClass, 'bg-black/50 fixed z-40 overflow-y-auto top-0 left-0 w-full h-screen pr-4.25 group-[.modal-open-mobile]/body:pr-0')
    ]
})

const modalSizeClasses = {
    size: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
    }
}

const modalClass = computed(() => {
    return [
        props.noDefaultAttrsClass || 'flex flex-col relative bg-white rounded-lg p-5 lg:p-7.5 w-[calc(100%-var(--width-content-margin)*2)]',
        props.size && modalSizeClasses.size[props.size]
    ]
})

const modalWrapperClass = computed(() => {
    return [
        checkDefaultClass(props.wrapperClass, 'overflow-hidden z-50 min-h-screen w-full py-6 justify-center items-center flex'),
    ]
})

const modalCloseClass = computed(() => {
    return [
        checkDefaultClass(props.closeClass, 'z-40 absolute lg:top-4 top-5 right-5 lg:right-4'),
    ]
})

const closeModal = () => {
    emit('close')
}
</script>

