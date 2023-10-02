<template>
    <div class="flex h-full flex-col rounded-2.5 lg:rounded-3.75 bg-white overflow-hidden shadow-[0_4px_23px_0_#0001] ring-2 ring-transparent hover:ring-fblue transition-shadow duration-500 ease-linear">
        <div class="h-204px sm:h-237px lg:h-230px relative">
            <div class="w-full h-full [&>img]:(w-full h-full object-cover)" v-html="img"></div>
            <div class="absolute text-white font-semibold left-5 top-5 px-5 text-base py-1.5 bg-fred rounded-full uppercase" v-if="isSale">sale</div>
        </div>
        <div class="flex flex-col flex-cal gap-4 p-5 border-b border-fline grow">
            <h3 class="text-fblack text-lg font-semibold leading-1.2 grow line-clamp-3">{{ title }}</h3>
            <p class="text-sm text-fmain leading-1.4 h-60px line-clamp-3">{{ description }}</p>
            <div v-if="durationShow" class="flex gap-2 items-center text-Inputlabel text-sm leading-1.2">
                <Icon name="TimeOclock" class="text-white fill-fblue" size="20"></Icon>
                <span>{{ generalConfig?.static_info?.global_words?.duration }}:</span>
                <span class="text-fblack font-medium">{{ duration }}</span>
            </div>
            <div class="flex gap-2 items-center text-Inputlabel text-sm leading-1.2">
                <Icon name="Star" size="20" class="text-fblue"></Icon>
                <span>{{ generalConfig?.static_info?.global_words?.reviews }}:</span>
                <span class="text-fblack font-medium">{{ reviewsCount }}</span>
            </div>
            <CustomLink :to="slug" class="lg:mt-1 text-fblack leading-1.2 text-sm underline">
                {{ generalConfig?.static_info?.global_words?.more }}
            </CustomLink>
        </div>
        <div class="p-5">
            <Button class="w-full" @click="$emit('order')">
                {{ generalConfig?.static_info?.global_words?.order }}
                <span class="ml-auto font-Inter text-lg leading-1.4 font-semibold uppercase">{{ price }}₽</span>
            </Button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: String,
    description: String,
    duration: String,
    reviewsCount: Number,
    price: Number,
    isSale: { type: Boolean, default: false },
    slug: String,
    img: String,
    type_id: Number,
})

const durationShow = computed(() => {
    return props?.type_id == 11 || props?.type_id == 12

})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>