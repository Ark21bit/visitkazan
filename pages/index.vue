<template>
    <div class="col-span-full h-600px sm:h-800px relative">
        <SwiperIndex :data="pageInfo?.slider?.data" />
        <div class="max-lg:hidden bg-#189AB5 rounded-3xl absolute w-full bottom-0 z-1">
            <div class="wrapper py-3">
                <FormKit @input="changeTimetamble" type="datepickerC" :minDate="$dayjs().toDate()" inner-class="$remove:rounded-2.5 rounded-1.5" outer-class="[&_.dp\_\_input]:(w-7 h-7 p-1) [&_.dp\_\_input\_icon]:(left-1/2 -translate-y-1/2 -translate-x-1/2 w-fit) [&_.formkit-input-icon]:(text-base shrink-0)"
                    :label="generalConfig?.static_info?.global_words?.calendar_excursions" wrapper-class="flex gap-4 items-center" label-class="$remove:text-xs $remove:leading-1.4 $remove:text-Inputlabel $remove:mb-1 text-base text-white leading-1.2 font-medium"></FormKit>
            </div>
            <div class="h-8 rounded-t-3xl bg-white">

            </div>
        </div>
    </div>
    <div class="col-span-full grid-container max-lg:rounded-t-3xl max-lg:z-1 max-lg:-mt-8 bg-white lg:pt-17 pt-15 contain-paint">
        <div>
            <h2 class="font-Nekst text-6.5 lg:text-4xl text-fblack leading-1.1 lg:leading-1.1">{{ pageInfo?.content?.our_services?.title }}</h2>
            <SwiperServices :services="pageInfo?.content?.our_services?.items" class="mt-7.5 lg:mt-12.5" />
        </div>
        <OurPrograms :programs="pageInfo?.content?.our_programs?.items" :mainImage="pageInfo?.content?.our_programs?.main_image" :title="pageInfo?.content?.our_programs?.title" class="mt-20 lg:mt-37.5" />
        <Feedback :title="pageInfo?.content?.form_search?.title" :description="pageInfo?.content?.form_search?.description" class="mt-20 lg:mt-37.5"></Feedback>
        <div class="max-lg:hidden mt-20 lg:mt-37.5">
            <h2 class="font-Nekst text-6.5 lg:text-4xl text-fblack leading-1.1 lg:leading-1.1">{{ pageInfo?.content?.recommendation?.title }}</h2>
            <div class="grid grid-cols-3 gap-x-7.5 mt-10">
                <div><img src="/imgs/recommendations1.png" class="w-full h-full object-cover rounded-3.75" alt=""></div>
                <div><img src="/imgs/recommendations2.png" class="w-full h-full object-cover rounded-3.75" alt=""></div>
                <div v-for="item in pageInfo?.recommendations?.data" class="flex flex-col py-6 border-b border-fline2">
                    <p class="bg-tag2/12 rounded-1.25 px-3 py-2 text-sm font-medium leading-1.2 text-tag w-fit">Регулярные экскурсии</p>
                    <h3 class="font-Nekst mt-4 text-5.5 leading-1.2 font-semibold text-fblack grow">{{ item?.lang_info?.title }}</h3>
                    <p class="mt-5 max-w-380px text-sm text-black/60  leading-1.4">
                        <span class="line-clamp-3">{{ item?.lang_info?.description }}</span>
                    </p>
                    <CustomLink :to="item?.slug" class="w-fit mt-7.5 text-fblue text-sm leading-1.4 uppercase flex gap-3 items-center">
                        {{ generalConfig?.static_info?.global_words?.to_learn_more }} <Icon name="Arrow2" size="21" height="12"></Icon>
                    </CustomLink>
                </div>
                <Button :tag="CustomLink" to="/ekskursii" class="mt-10 col-span-full w-full">{{ generalConfig?.static_info?.global_words?.view_all_excursions }}</Button>
            </div>
        </div>
        <div class="hidden lg:flex gap-7.5 mt-20 lg:mt-37.5">
            <div class="flex-1 h-530px">
                <img :src="pageInfo?.content?.welcome_kazan?.main_image" class="w-full h-full rounded-3.75 object-cover" alt="">
            </div>
            <div class="flex-1 flex flex-col gap-5 text-fblack">
                <h2 class="font-Nekst text-4xl leading-1.1">{{ pageInfo?.content?.welcome_kazan?.title }}</h2>
                <p class="text-sm leading-1.4 max-w-lg">{{ pageInfo?.content?.welcome_kazan?.description }}</p>
                <Button class="mt-2.5 w-230px">{{ generalConfig?.static_info?.global_words?.to_learn_more }}</Button>
                <div class="mt-auto border-y border-fline2 py-5 flex justify-between gap-3">
                    <div v-for="item in pageInfo?.content?.welcome_kazan?.counters" class="max-w-170px">
                        <p class="font-medium text-10 leading-1.6">{{ item?.value }}</p>
                        <p class="text-fmain text-sm leading-1.4">{{ item?.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomLink from '~/components/atoms/CustomLink.vue';
const { data: pageInfo } = await useBaseFetch('search/page', {
    query: { key: 'main' }
})
const localePath = useLocalePath()
const dayjs = useDayjs()
const changeTimetamble = async (date) => await navigateTo(localePath(`/excursion/timetable/${dayjs(date).format('YYYY/MM/DD')}`))
const { generalConfig } = storeToRefs(useGeneralConfigStore())

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? '',
    description: () => pageInfo.value?.seo?.description ?? '',
    keywords: () => pageInfo.value?.seo?.keywords ?? '',
})
</script>