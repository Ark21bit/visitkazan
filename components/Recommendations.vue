<template>
    <div>
        <h2 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack">{{ generalConfig?.static_info?.global_words?.recommendations }}</h2>
        <div class="mt-7.5 lg:mt-10.5 grid grid-cols-1 sm:grid-cols-2 gap-7.5 lg:grid-cols-3">
            <card-recommendation v-for="item in data" :img="item?.data?.media_preview" :slug="item?.data?.slug" :title="item?.data?.lang_info?.title" :price="item?.data?.price_see"></card-recommendation>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: Array
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>
