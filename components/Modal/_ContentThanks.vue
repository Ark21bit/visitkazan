<template>
    <h2 class="mt-7.5 text-center font-Nekst leading-1.2 sm:leading-1.2 text-xl sm:text-2xl text-fblack">{{ generalConfig?.static_info?.global_words?.thank_you }}</h2>
    <p class="mt-2.5 text-center text-fmain text-sm leading-1.2">{{ generalConfig?.static_info?.global_words?.success_send_request }}</p>
    <Button :tag="CustomLink" to="/" class="mt-5 w-full lg:w-fit mx-auto">{{ generalConfig?.static_info?.global_words?.on_main_page }}</Button>
</template>

<script setup>
import CustomLink from '../atoms/CustomLink.vue';

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>