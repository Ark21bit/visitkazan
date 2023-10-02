<template>
    <div>
        <h2 class="font-Nekst text-6.5 lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack">{{ title }}</h2>
        <div class="mt-6 lg:mt-12.5 grid grid-cols-1 lg:grid-cols-2 justify-between gap-7.5">
            <div class="grid gap-x-6 grid-cols-1 sm:max-lg:grid-cols-2">
                <CustomLink v-for="program in programs" :to="program?.slug" class="group/program flex w-full gap-6 sm:max-lg:[&:nth-child(2)]:border-t first:border-t py-5 border-b border-fline text-fblack hover:text-fblue transition-colors duration-500 ease-linear">
                    <div  class="grow flex justify-between gap-2 text-lg lg:text-xl font-medium leading-1.4 lg:leading-1.4">
                        <span class="max-lg:hidden">{{ program?.key }}</span>
                        <div class="flex flex-col lg:flex-row lg:items-center justify-between grow max-w-455px">
                            <p>{{ program?.title }}</p>
                            <div class="w-fit relative flex items-center">
                                <div class="absolute h-0.5 w-2 bg-current right-0 rotate-45 origin-right rounded-full -translate-x-.25"></div>
                                <div class="group-hover/program:w-65px transition-width duration-500 ease-linear w-25px h-0.5 bg-current rounded-full"></div>
                                <div class="absolute h-0.5 w-2 bg-current right-0 -rotate-45 origin-right rounded-full -translate-x-.25"></div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:hidden w-134px sm:w-181px shrink-0">
                        <img :src="program?.image" class="object-cover rounded-2.5 w-full h-85px sm:h-113px" alt="">
                    </div>
                </CustomLink>
            </div>
            <div class="relative max-lg:hidden">
                <img :src="mainImage" class="rounded-3.75 w-full h-full absolute object-cover" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    programs: Array,
    title: String,
    mainImage:String,
})
</script>