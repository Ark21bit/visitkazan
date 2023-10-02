<template>
    <footer class="grid-container pt-7.5 rounded-t-5 bg-footer text-white z-1 lg:(pt-12.5 rounded-t-7.5)">
        <div class="flex flex-col lg:(flex-row gap-7.5 pb-7.5) max-lg:col-span-full">
            <div class="grid grid-rows-[1fr_auto] flex-1 lg:(gap-7.5 gap-y-5 grid-cols-2)">
                <div class="flex gap-5 border-footer2 lg:flex-col max-lg:(px-[var(--width-content-margin)] flex-wrap items-start border-b pb-5)">
                    <div><img src="/imgs/logo2.png" alt="" class="lg:w-155px lg:h-78px h-43px w-85px"></div>
                    <p class="w-full text-xs leading-1.4 lg:(text-sm max-w-276px) max-lg:order-3">{{ generalConfig?.static_info?.footer_seo?.about_us }}</p>
                    <!-- <CustomLink to="https://www.instagram.com/persona_grata_kzn" target="_blank" class="max-lg:ml-auto p-1.5 lg:mt-auto bg-white rounded-1.25 w-fit flex">
                        <Icon name="Ig" class="text-lg text-fblue"></Icon>
                    </CustomLink> -->
                </div>
                <div class="max-lg:hidden">
                    <h3 class="font-Nekst text-xl font-semibold leading-1.1 pb-5 border-b border-footer2">{{ generalConfig?.static_info?.footer_seo?.column_1?.title }}</h3>
                    <div class="flex flex-col gap-4 text-base leading-1.4 mt-5">
                        <CustomLink v-for="item in generalConfig?.static_info?.footer_seo?.column_1?.data" :to="item?.slug" class="w-fit">{{ item?.title }}</CustomLink>
                    </div>
                </div>
                <div class="max-lg:px-[var(--width-content-margin)] col-span-full flex flex-col gap-y-4.5 sm:gap-y-5 lg:gap-y-2.5 flex-wrap max-lg:border-b border-footer2 max-lg:py-5">
                    <div class="flex max-sm:flex-col gap-x-7.5 lg:gap-x-5 gap-y-4.5 text-3.25">
                        <NuxtLink v-for="telephon in generalConfig?.static_info?.contact?.telephones" :to="phoneLinkReplace(telephon)" class="flex items-center">
                            <Icon name="Phone" class="mr-1 text-fblue" size="18"></Icon>{{ telephon }}
                        </NuxtLink>
                    </div>
                    <div class="flex max-sm:flex-col gap-x-5 gap-y-4.5 text-3.25">
                        <NuxtLink v-for="email in generalConfig?.static_info?.contact?.emails" :to="`mailto:${email}`" class="flex items-center">
                            <Icon name="Mail" class="mr-1 text-footer fill-fblue" size="18"></Icon>{{ email }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-7.5 flex-1">
                <div class="max-lg:hidden">
                    <h3 class="font-Nekst text-xl font-semibold leading-1.1 pb-5 border-b border-footer2">{{ generalConfig?.static_info?.footer_seo?.column_2?.title }}</h3>
                    <div class="flex flex-col gap-4 text-base leading-1.4 mt-5">
                        <CustomLink v-for="item in generalConfig?.static_info?.footer_seo?.column_2?.data" :to="item.slug" class="inline">{{ item?.title }}</CustomLink>
                    </div>
                </div>
                <div class="max-lg:px-[var(--width-content-margin)] flex flex-col max-lg:py-5 max-lg:border-b border-footer2">
                    <h3 class="font-Nekst text-lg lg:text-xl font-semibold leading-1.1 lg:leading-1.1 pb-5 lg:border-b border-footer2">{{ generalConfig?.static_info?.global_words?.order_now }}</h3>
                    <div class="text-base leading-1.4 mt-5 flex flex-col gap-5 grow">
                        <p class="text-sm">{{ generalConfig?.static_info?.global_words?.we_will_answer_any_your_questions }}</p>
                        <Button :tag="CustomLink" to="/contacts" class="w-full sm:w-226px lg:w-fit">{{ generalConfig?.static_info?.global_words?.ask_question }}</Button>
                        <div class="flex items-center gap-5 mt-auto max-lg:hidden">
                            <img src="/icons/visa.svg" alt="">
                            <img src="/icons/mastercard.svg" alt="">
                            <img src="/icons/mir.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 flex flex-col sm:flex-row gap-4 justify-between text-sm leading-1.4 lg:border-t border-footer2">
            <p>{{ generalConfig?.static_info?.global_words?.copyright }}</p>
            <CustomLink v-for="link in generalConfig?.static_info?.bottom_footer" :to="link?.slug">{{ link?.title }}</CustomLink>
            <div class="sm:hidden flex items-center gap-3 mt-1">
                <img class="w-39px h-12px" src="/icons/visa.svg" alt="">
                <img class="w-24px h-19px" src="/icons/mastercard.svg" alt="">
                <img class="w-45px h-13px" src="/icons/mir.svg" alt="">
            </div>
        </div>
    </footer>
</template>

<script setup>
import CustomLink from './atoms/CustomLink.vue';
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>