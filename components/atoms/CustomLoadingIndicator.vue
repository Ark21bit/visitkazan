<template>
    <transition enter-from-class="opacity-0" leave-to-class="opacity-0" leave-active-class="transition-opacity duration-100 ease-out opacity-60" enter-active-class="transition-opacity duration-100 ease-out opacity-60">
        <div class="min-h-screen w-full bg-[rgba(255,255,255,0.6)] fixed top-0 left-0 flex items-center justify-center z-[99999]" v-if="isLoading || isShow">
            <Icon name="svg-spinners:blocks-wave" class="text-5xl text-fblue" />
        </div>
    </transition>
</template>

<script lang="ts" setup>

const props = defineProps({
    throttle: { type: Number, default: 200 },
    duration: { type: Number, default: 2000 },
    isShow: { type: Boolean, default: true },
})

const progress = ref(0)
const isLoading = ref(false)
const step = computed(() => 10000 / props.duration)

let _timer: any = null
let _throttle: any = null

function start() {
    clear()
    progress.value = 0
    if (props.throttle && process.client) {
        _throttle = setTimeout(() => {
            isLoading.value = true
            _startTimer()
        }, props.throttle)
    } else {
        isLoading.value = true
        _startTimer()
    }
}
function finish() {
    progress.value = 100
    _hide()
}

function clear() {
    clearInterval(_timer)
    clearTimeout(_throttle)
    _timer = null
    _throttle = null
}

function _increase(num: number) {
    progress.value = Math.min(100, progress.value + num)
}

function _hide() {
    clear()
    if (process.client) {
        setTimeout(() => {
            isLoading.value = false
            setTimeout(() => { progress.value = 0 }, 400)
        }, 500)
    }
}

function _startTimer() {
    if (process.client) {
        _timer = setInterval(() => { _increase(step.value) }, 100)
    }
}

const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', start)
nuxtApp.hook('page:finish', finish)
onBeforeUnmount(clear)
</script>