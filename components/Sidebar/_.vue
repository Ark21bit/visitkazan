<template>
    <div class="shadow-sidebar bg-white rounded-3.75 border border-black/5 z-10">
        <div class="flex items-center gap-2 justify-between px-4 lg:px-5 py-5 text-fblack">
            <p class="text-base uppercase font-medium leading-1.2">{{ generalConfig?.static_info?.global_words?.menu }}</p>
            <button @click="isShow = !isShow" class="lg:hidden h-3.5 flex flex-col justify-between items-end w-26px">
                <span :class="{ '-rotate-45 -translate-y-0.75': isShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-300" />
                <span :class="isShow ? 'opacity-0 w-0' : 'w-full'" class="h-0.5 bg-fblack rounded-.25 transition-width,opacity ease-linear duration-300" />
                <span :class="{ 'rotate-45 translate-y-0.75': isShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-300" />
            </button>
        </div>
        <div class="flex-col gap-5 py-5 border-t border-fline2 [&>*]:px-5" :class="isShow ? 'flex' : 'max-lg:hidden lg:flex'">
            <SidebarItem v-for="item in structure" :data="item"></SidebarItem>
        </div>
    </div>
</template>

<script setup>
const isShow = ref(false)

const { generalConfig, structure } = storeToRefs(useGeneralConfigStore())
</script>