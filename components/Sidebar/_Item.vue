<template>
    <Dropdown :is-show="isIncludesLink" v-if="data?.children?.length > 0" class="text-fblack font-medium text-base leading-1.2 grow">
        <template #dropdown-header-content>
            <CustomLink :to="data?.slug" :class="{ 'text-fblue': isIncludesLink }" class="font-medium text-base leading-1.2 hover:text-fblue transition-colors duration-500 ease-linear">{{ data?.title }}</CustomLink>
        </template>
        <ul class="flex flex-col mt-5 gap-4 pb-5">
            <li v-for="item in data?.children" class="flex items-start gap-2.5 before:(w-1.5 h-1.5 rounded-full bg-fblue mt-.5em shrink-0 content-['']) ![&_.group\/dropdown]:px-0">
                <SidebarItem :data="item"></SidebarItem>
            </li>
        </ul>
    </Dropdown>
    <CustomLink v-else :to="data?.slug" :class="{ 'text-fblue': isIncludesLink }" class="text-fblack font-medium text-base leading-1.2 hover:text-fblue transition-colors duration-500 ease-linear">{{ data?.title }}</CustomLink>
</template>

<script setup>
const props = defineProps({
    data: Object
})
const route = useRoute()
const isIncludesLink = computed(() => route.fullPath.includes(props.data?.slug)) 
</script>